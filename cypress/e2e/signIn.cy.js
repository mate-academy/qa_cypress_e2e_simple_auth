/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not allow to log in with invalid username', () => {
    cy.get('#username')
      .type('tom');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not allow to log in with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecret');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should provide an ability to log out from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('.icon-2x')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
