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
    cy.get('[id="username"]')
      .type(validData.username);
    cy.get('[id="password"]')
      .type(validData.password);
    cy.get('.fa-sign-in')
      .click();
    cy.get('[id="flash"]')
      .should('contain', 'You logged into a secure area!')
  });
  it('not be able to Login with invalid Username', () => {
    cy.get('[id="username"]')
      .type(validData.username+'invalid');
    cy.get('[id="password"]')
      .type(validData.password);
    cy.get('.fa-sign-in')
      .click();
    cy.get('[id="flash"]')
      .should('contain', 'Your username is invalid!')
  });
  it('not be able to Login with invalid Password', () => {
    cy.get('[id="username"]')
      .type(validData.username);
    cy.get('[id="password"]')
      .type(validData.password+'invalid');
    cy.get('.fa-sign-in')
      .click();
    cy.get('[id="flash"]')
      .should('contain', 'Your password is invalid!')
  });
  it('be able to Logout from the app', () => {
    cy.get('[id="username"]')
      .type(validData.username);
    cy.get('[id="password"]')
      .type(validData.password);
    cy.get('.fa-sign-in')
      .click();
    cy.get('[id="flash"]')
      .should('contain', 'You logged into a secure area!')
    cy.get('.button')
      .should('contain', 'Logout')
      .click()
  });
});