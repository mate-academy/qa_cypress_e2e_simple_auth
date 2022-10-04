/// <reference types="cypress" />

describe('User should', () => {
  beforeEach (() => (
    cy.visit('https://the-internet.herokuapp.com/login')
  ));
    const validData = {
      username : 'tomsmith',
      password : 'SuperSecretPassword!'
   };
  it('be able to Login with valid creds', () => {
    cy.get('#username')
      .type(validData.username);
    cy.get('#password')
      .type(validData.password);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
  });
  it('not be able to Login with invalid Username', () => {
    cy.get('#username')
      .type(validData.username+'invalid');
    cy.get('#password')
      .type(validData.password);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });
  it('not be able to Login with invalid Password', () => {
    cy.get('#username')
      .type(validData.username);
    cy.get('#password')
      .type(validData.password+'invalid');
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!')
  });
  it('be able to Logout from the app', () => {
    cy.get('#username')
      .type(validData.username);
    cy.get('#password')
      .type(validData.password);
    cy.get('.radius')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
    cy.get('.button')
      .should('contain', 'Logout')
      .click()
  });
});