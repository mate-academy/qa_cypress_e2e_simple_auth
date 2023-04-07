/// <reference types="cypress" />
import Login from "./PageObjects/loginPage";
describe("Login page", () => {
  const login = new Login();
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Visit 'Login Page'", () => {
    cy.get("h2").should("have.text", "Login Page");
  });

  it("Login with valid creds", () => {
    cy.fixture("creds").then((data) => {
      login.typeUsername(data.username);
      login.typePswd(data.password);
      login.clickSubmit();
      login.verifyUrl("/secure");
      login.verifyLoginText("You logged into a secure area!");
    });
  });

  it("Login with invalid creds", () => {
    login.typeUsername("Username");
    login.typePswd("Password");
    login.clickSubmit();
    login.verifyLoginText("Your username is invalid!");
  });

  it("Logout from the app", () => {
    cy.login();
    login.clickLogout();
    login.verifyLogoutText("You logged out of the secure area!");
    login.verifyUrl("/login");
  });
});
