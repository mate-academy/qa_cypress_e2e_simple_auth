/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
  });

  it('should display validation errors with invalid username', () => {
    cy.get('#username').type('invalid Username');
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', ' Your username is invalid!');
  });

  it('should display validation errors with invalid password', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type('invalid Password');
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', ' Your password is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('.button').click();
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
