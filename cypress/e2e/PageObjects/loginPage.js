export default class Login {
  usernameLocator = "#username";
  passwordLocator = "#password";
  loginBtnLocator = "button[type='submit']";
  logoutBtnLocator = "[href='/logout']";
  typeUsername(username) {
    cy.get(this.usernameLocator).type(username);
  }

  typePswd(pswd) {
    cy.get(this.passwordLocator).type(pswd);
  }

  clickSubmit() {
    cy.get(this.loginBtnLocator).click();
  }

  verifyUrl(text) {
    cy.url().should("include", text);
  }

  verifyLoginText(text) {
    cy.get("#flash").should("contain.text", text);
  }

  verifyLogoutText(text) {
    cy.get("#flash").should("contain.text", text);
  }

  clickLogout() {
    cy.get(this.logoutBtnLocator).click();
  }
}
