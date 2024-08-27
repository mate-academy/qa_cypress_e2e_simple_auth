/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should show validation errors with invalid username', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should show validation errors with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should logout successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('a[href="/logout"]').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
