/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should allow a user to log in', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!' + '{enter}');

    cy.get('#flash')
      .should('contain.text', ' You logged into a secure area!')
  });

  it('should not allow a user with wrong username to log in', () => {
    cy.get('#username')
      .type('User');

    cy.get('#password')
      .type('SuperSecretPassword!' + '{enter}');

    cy.get('#flash')
      .should('contain.text', ' Your username is invalid!')
  });

  it('should not allow a user with wrong password to log in', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('Password!' + '{enter}');

    cy.get('#flash')
      .should('contain.text', ' Your password is invalid!')
  });

  it('should allow a user to log out', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!' + '{enter}');

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
