/// <reference types="cypress" />

describe('Log In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should allow to log in with valid data', () => {
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');

    cy.get('.radius').click();
    cy.get('.flash').should('contain', 'You logged into a secure area!');
  });

  it('should not allow to log in with invalid username', () => {
    cy.get('[name="username"]').type('invalid Username');
    cy.get('[name="password"]').type('SuperSecretPassword!');

    cy.get('.radius').click();
    cy.get('.flash').should('contain', 'Your username is invalid!');
  });

  it('should not allow to log in with invalid password', () => {
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('invalid Password');

    cy.get('.radius').click();
    cy.get('.flash').should('contain', 'Your password is invalid!');
  });

  it('should allow to log out', () => {
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');

    cy.get('.radius').click();
    cy.get('.flash').should('contain', 'You logged into a secure area!');
    cy.get('.button.secondary.radius').click();
  });
});
