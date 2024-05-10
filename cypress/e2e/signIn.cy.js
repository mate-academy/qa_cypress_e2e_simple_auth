/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`https://the-internet.herokuapp.com/login`);
  });
  it('should login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should not login with invalid username', () => {
    cy.get('#username').type('timsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid');
});
  
  it('should not login with invalid password', () => {
  cy.get('#username').type('tomsmith');
  cy.get('#password').type('2SuperSecretPassword!');
  cy.get('.fa').click();
  cy.get('#flash').should('contain', 'Your password is invalid');
});
  
  it('should log out from the app', () => {
  cy.get('#username').type('tomsmith');
  cy.get('#password').type('SuperSecretPassword!');
  cy.get('.fa').click();
  cy.get('#flash').should('contain', 'You logged into a secure area!');
  cy.get('.icon-2x').click();
  cy.get('#flash').should('contain', 'You logged out of the secure area!');
});
});
