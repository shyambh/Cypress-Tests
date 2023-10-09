import * as ProductsPageObject from "../PageObjects/ProductsPageObject";

export function selectCategory(topCategory, subCategory) {
  const regexPattern = new RegExp(topCategory, "i");
  cy.get(ProductsPageObject.categorySelection).contains(regexPattern).click();

  cy.get(ProductsPageObject.categorySelection).contains(subCategory).click();
}

export function getNamesOfListedProducts() {
  return cy.get(ProductsPageObject.productName);
}
