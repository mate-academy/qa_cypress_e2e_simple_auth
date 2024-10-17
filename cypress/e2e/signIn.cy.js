/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
    cy.assertPageURL('/login');
  });

  it('should log in if credentials are correct', () => {
    cy.login(username, password);
    cy.get('.flash.success').contains('You logged into a secure area!');
  });

  it('should display an error message for invalid username', () => {
    cy.login(username + 'invalid', password);
    cy.get('.flash.error').contains('Your username is invalid!');
  });

  it('should display an error message for invalid password', () => {
    cy.login(username, password + 'invalid');
    cy.get('.flash.error').contains('Your password is invalid!');
  });

  it('should redirect to the correct URL after successful login', () => {
    cy.login(username, password);
    cy.assertPageURL('/secure');
    cy.get('.flash.success').contains('You logged into a secure area!');
  });

  it('should log out from the app', () => {
    cy.login(username, password);
    cy.get('[href="/logout"]').click();
    cy.get('.flash').contains('You logged out of the secure area!');
  });
});
