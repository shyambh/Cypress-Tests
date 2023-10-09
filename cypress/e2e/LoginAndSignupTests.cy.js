/// <reference types="cypress" />

import { defaultBaseUrl } from "../support/utility";
import * as HomePage from "../support/Pages/HomePage";

let baseUrl = defaultBaseUrl;

describe("template spec", () => {
  beforeEach(() => {
    cy.log("Navigating to the homepage");
    debugger;
    cy.visit(baseUrl);

    // Maximize the window
    cy.viewport(window.screen.width, window.screen.height);
  });

  it("Navigate to the signup page", () => {
    HomePage.clickSignUpLink();
    cy.url().should("eq", baseUrl + "login");
  });

  it("Sign up into the web app", () => {
    // The trailing variable which is ms after epoch is used to concat with email address to create a unique user every time
    let trailing = Date.now();
    HomePage.clickSignUpLink();
    HomePage.NewUserSignUp("Test User", `test${trailing}@example.com`);

    HomePage.FillNewUserRegistrationForm();
  });
});
