/// <reference types="cypress" />

describe('Login/Logout flow', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();

    cy.url().should('include', '/secure');
  });

  it('should not provide an ability to log in with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username')
      .type('asd');
    cy.get('#password')
      .type('asd');
    cy.get('button[type="submit"]')
      .click();

    cy.get('.flash.error')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();

    cy.url().should('include', '/secure');

    cy.contains('a', 'Logout')
      .click();

    cy.get('.flash.success')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
