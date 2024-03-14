/// <reference types="cypress" />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const wrongUsername = 'Wrong username';
const wrongPassword = 'Wrong password';
const messageForWrongPassword = 'Your password is invalid!';
const messageForWrongUsername = 'Your username is invalid!';
const messageForLogout = 'You logged out of the secure area!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`/login`);
  });

  it('should provide the ability to login with valid creds', () => {
    cy.login(username, password);
    cy.get('[href="/logout"]').should('exist');
  });

  it('should not provide the ability to login with invalid password', () => {
    cy.login(username, wrongPassword);
    cy.findById('flash').contains(messageForWrongPassword).should('be.visible');
  });

  it('should not provide the ability to login with invalid username', () => {
    cy.login(wrongUsername, password);
    cy.findById('flash').contains(messageForWrongUsername).should('be.visible');
  });

  it('should provide the ability to logout from the app', () => {
    cy.login(username, password);
    cy.get('[href="/logout"]').click();
    cy.findById('flash').contains(messageForLogout).should('be.visible');
  });
});
