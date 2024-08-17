/* eslint-disable max-len */
export default class SignInPage {
  get usernameField() {
    return cy.get('#username');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get submitButton() {
    return cy.get('button[type="submit"]');
  }

  get logoutButton() {
    return cy.get('.icon-2x.icon-signout');
  }

  typeUsername(username) {
    this.usernameField.clear().type(username);
  }

  typePassword(password) {
    this.passwordField.clear().type(password);
  }

  clickSubmit() {
    this.submitButton.click();
  }

  clickLogout() {
    this.logoutButton.click();
  }

  assertLoginSuccess() {
    cy.url().should('include', '/secure');
    cy.get('.flash.success').should('contain.text', 'You logged into a secure area!');
  }

  assertLoginFailure() {
    cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
  }

  assertLogoutSuccess() {
    cy.url().should('include', '/login');
    cy.get('.flash.success').should('contain.text', 'You logged out of the secure area!');
  }
}
