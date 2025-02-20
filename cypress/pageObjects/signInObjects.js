/// <reference types="cypress" />

export default class SignInPage {
  typeInUsernameField(username) {
    cy.get('#username').type(username);
  }

  typeInPasswordField(password) {
    cy.get('#password').type(password);
  }

  clickLogin() {
    cy.get('.radius').click();
  }

  assertNotification(text) {
    cy.get('#flash').assertNotifText(text);
  }
}
