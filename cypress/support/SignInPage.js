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

  typeUsername(username) {
    this.usernameField.clear().type(username);
  }

  typePassword(password) {
    this.passwordField.clear().type(password);
  }

  clickSubmit() {
    this.submitButton.click();
  }

  assertLoginSuccess() {
    cy.url().should('include', '/secure');
    cy.get('.flash.success').should('contain.text', 'You logged into a secure area!');
  }

  assertLoginFailure() {
    cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
  }
}
