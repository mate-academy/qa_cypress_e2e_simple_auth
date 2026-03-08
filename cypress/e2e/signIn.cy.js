/// <reference types="cypress" />

describe('Sign In flow', () => {
  const url = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(url);
  });

  it('should login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  it('should show error with invalid username', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });

  it('should show error with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword');

    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your password is invalid!');
  });

  it('should logout successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.get('a[href="/logout"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
