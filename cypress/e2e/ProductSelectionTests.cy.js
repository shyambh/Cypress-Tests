/// <reference types="cypress" />

import { defaultBaseUrl } from "../support/utility";
import * as HomePage from "../support/Pages/HomePage";
import * as ProductPage from "../support/Pages/ProductsPage";

const fs = require("fs");
let baseUrl = defaultBaseUrl;

describe("template spec", () => {
  beforeEach(() => {
    cy.log("Navigating to the homepage");
    cy.visit(baseUrl + "products");

    // Maximize the window
    cy.viewport(window.screen.width, window.screen.height);
  });

  it("Verify that the feature category has 34 products", () => {
    let sum = 0;
    const regex = /\d+/g;

    cy.log("Verifying the product count from the featured products section");
    HomePage.GetAllProductsInThePage().its("length").should("eq", 34);

    cy.log("Verifying the sum of all the products categorized by brands");
    HomePage.GetAllProductSumByBrandName()
      .each(($element) => {
        const match = $element.text().match(regex);
        sum += parseInt(match);
      })
      .then(() => {
        cy.wrap(sum).should("eq", 34);
      });
  });

  it("Verify that the dress can be filetered and saved to a file", () => {
    HomePage.ClickNavBarMenu("Products");
    ProductPage.selectCategory("Women", "Dress");

    HomePage.GetAllProductsInThePage().its("length").should("eq", 3);

    ProductPage.getNamesOfListedProducts().each(($product) => {
      debugger;
      const filepath = "data/dress.txt";

      cy.writeFile(filepath, $product.text() + "\n", { flag: "a+" });
    });
  });
});
