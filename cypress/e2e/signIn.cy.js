/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`https://the-internet.herokuapp.com/login`);
  });

  it('should allow to login with valid creds', () => {
    cy.get('#username')
      .type(`tomsmith`);
    cy.get('#password')
      .type(`SuperSecretPassword!`);
    cy.get('[type="submit"]')
      .click();
    cy.get('.success')
      .should('contain', 'You logged into a secure area!');
    cy.get('h2')
      .should('contain', 'Secure Area');
  });

  it('should not allow to login with invalid creds', () => {
    cy.get('#username')
      .type(`tomsmith1`);
    cy.get('#password')
      .type(`SuperSecretPassword!1`);
    cy.get('[type="submit"]')
      .click();
    cy.get('.error')
      .should('contain', 'Your username is invalid!');
    cy.get('h2')
      .should('contain', 'Login Page');
  });

  it('should allow to logout from the app', () => {
    cy.get('#username')
      .type(`tomsmith`);
    cy.get('#password')
      .type(`SuperSecretPassword!`);
    cy.get('[type="submit"]')
      .click();
    cy.get('[href="/logout"]')
      .click();
    cy.get('.success')
      .should('contain', 'You logged out of the secure area!');
    cy.get('h2')
      .should('contain', 'Login Page');
  });
});
