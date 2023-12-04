/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should provide an ability to log in with valid credentials', () => {
    cy.get('input[name = "username"]')
      .type('tomsmith');
    cy.get('input[name = "password"]')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash-messages')
      .should('contain', 'You logged into a secure area!');
  });
  it(`shouldn't provide the ability to login with invalid credentials`, () => {
    cy.get('input[name = "username"]')
      .type('badguyhacker');
    cy.get('input[name = "password"]')
      .type('villainpassword');
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash-messages')
      .should('contain', 'Your username is invalid!');
  });
  it('should provide an ability to log out after succesfull login', () => {
    cy.get('input[name = "username"]')
      .type('tomsmith');
    cy.get('input[name = "password"]')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.get('.button')
      .click();
    cy.get('#flash-messages')
      .should('contain', 'You logged out of the secure area!');
  });
});
