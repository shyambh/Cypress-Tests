//#region Common
export const navbarSection = ".nav.navbar-nav";
//#endregion

//#region SignUp Page
export const signUpLink = ".nav.navbar-nav li:contains(' Signup / Login')";
export const signupSection = ".signup-form:contains('New User Signup!')";
export const signupNameField = "input[type=text][placeholder=Name]";
export const signupEmailField =
  "form[action='/signup'] input[type=email][placeholder='Email Address']";

export const signupButton =
  "form[action='/signup'] button[data-qa='signup-button']";

//#region Account Info
export const genderSelector = "div.clearfix input[type=radio]";
export const nameField = "input#name";
export const passwordField = "[data-qa=password]";
export const calendarDaySelector = "[data-qa=days]";
export const calendarMonthSelector = "[data-qa=months]";
export const calendarYearSelector = "[data-qa=years]";
export const calendarOptionSelector = "option";

//#endregion

//#region Address Info
export const firstName = "[data-qa=first_name]";
export const lastName = "[data-qa=last_name]";
export const company = "[data-qa=company]";
export const address = "[data-qa=address]";
export const address2 = "[data-qa=address2]";
export const country = "[data-qa=country]";
export const state = "[data-qa=state]";
export const city = "[data-qa=city]";
export const zipcode = "[data-qa=zipcode]";
export const mobileNumber = "[data-qa=mobile_number]";
//#endregion

export const createAccountButton = "button[data-qa=create-account]";

//#endregion

//#region Account Created
export const accountCreatedMessage =
  "p:contains(Congratulations! Your new account has been successfully created!)";

export const continueButton = "[data-qa=continue-button]";
//#endregion
