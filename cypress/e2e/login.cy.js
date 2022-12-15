/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('login');
  });

  it('should have elements', () => {
    cy.urlLogin();
    cy.contains('h2', 'Login Page');
  });

  it('should login with valid credentials', () => {
    cy.successLogin();
    cy.url()
      .should('contain', 'secure');
    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not login with non-existing username', () => {
    cy.get('[name=username]')
      .type('thetommy');
    cy.get('[name=password]')
      .type('SuperSecretPassword!');
    cy.clickLoginButton();
    cy.urlLogin();
    cy.errorMessageUsername();
  });

  it('should not login with invalid password', () => {
    cy.get('[name=username]')
      .type('tomsmith');
    cy.get('[name=password]')
      .type('NotSecretPassword!');
    cy.clickLoginButton();
    cy.urlLogin();
    cy.errorMessagePassword();
  });

  it('should not login with invalid creds', () => {
    cy.get('[name=username]')
      .type('tommy');
    cy.get('[name=password]')
      .type('NotSecretPassword!');
    cy.clickLoginButton();
    cy.urlLogin();
    cy.errorMessageUsername();
  });

  it('should not login with empty username', () => {
    cy.get('[name=password]')
      .type('SuperSecretPassword!');
    cy.clickLoginButton();
    cy.urlLogin();
    cy.errorMessageUsername();
  });

  it('should not login with empty password', () => {
    cy.get('[name=username]')
      .type('tomsmith');
    cy.clickLoginButton();
    cy.urlLogin();
    cy.errorMessagePassword();
  });

  it('should successfuly logout', () => {
    cy.successLogin();
    cy.contains('[href="/logout"]', 'Logout')
      .click();
    cy.urlLogin();
    cy.get('[class="flash success"]')
      .should('contain', 'You logged out of the secure area!');
  });
});
