import * as HomePageObject from "../PageObjects/HomePageObject";
import { defaultBaseUrl } from "../utility";
import * as CommonPageObject from "../PageObjects/CommonPageObject";

export function ClickNavBarMenu(menuItem) {
  cy.get(CommonPageObject.navbarSection).contains(menuItem).click();
}

export function clickSignUpLink() {
  cy.get(HomePageObject.signUpLink).click();
  cy.get(HomePageObject.signupSection).should("be.visible");
}

export function NewUserSignUp(name, email) {
  cy.get(HomePageObject.signupNameField).type(name);
  cy.get(HomePageObject.signupEmailField).type(email);
  cy.get(HomePageObject.signupButton).click();
}

export function FillNewUserRegistrationForm() {
  // Randomly select Mr. or Mrs.
  cy.get(HomePageObject.genderSelector).eq(Math.round(Math.random())).click();
  cy.get(HomePageObject.passwordField).type("testPassword");

  cy.log("Setting the DOB");
  cy.get(HomePageObject.calendarDaySelector).select("14");

  cy.get(HomePageObject.calendarMonthSelector).select("December");

  cy.get(HomePageObject.calendarYearSelector).select("2000");

  cy.log("Fll up the Address information");
  cy.get(HomePageObject.firstName).type("Test");
  cy.get(HomePageObject.lastName).type("User");
  cy.get(HomePageObject.company).type("Test Company");
  cy.get(HomePageObject.address).type("Test Address");
  cy.get(HomePageObject.address2).type("Test Address2");
  cy.get(HomePageObject.country).select("Australia");
  cy.get(HomePageObject.state).type("New South Wales");
  cy.get(HomePageObject.city).type("Sydney");
  cy.get(HomePageObject.zipcode).type("1234");
  cy.get(HomePageObject.mobileNumber).type("1234567890");

  cy.log("Clicking on Create Account button");
  cy.get(HomePageObject.createAccountButton).click();

  cy.log("Verify that the user account is created");
  cy.get(HomePageObject.accountCreatedMessage).should("be.visible");
  cy.url().should("eq", defaultBaseUrl + "account_created");

  cy.log("Click on Continue button to dismiss the confirmation");
  cy.get(HomePageObject.continueButton).click();

  cy.url().should("eq", defaultBaseUrl);
  cy.log(
    "Verifying that the user is logged in and the logout button is visible in the navbar"
  );
  cy.get(HomePageObject.navbarSection)
    .should("contain.text", "Logged in as Test User")
    .and("contain.text", "Logout");
}

export function GetAllProductsInThePage() {
  cy.log("Fetching all the products from the page");
  return cy.get(HomePageObject.productsInfo);
}

export function GetAllProductSumByBrandName() {
  cy.log("Getting the product count of each brand");
  return cy.get(HomePageObject.getProductCountByBrand);
}
