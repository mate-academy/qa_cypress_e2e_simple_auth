/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should display validation errors with invalid username', () => {
    cy.get('#username').should('exist').type('Username');
    cy.get('#password').should('exist').type(validPassword);
    cy.get('.radius').should('exist').click();
    cy.get('#flash').should('exist')
      .should('contain.text', ' Your username is invalid!');
  });

  it('should display validation errors with invalid password', () => {
    cy.get('#username').should('exist').type(validUsername);
    cy.get('#password').should('exist').type('Password');
    cy.get('.radius').should('exist').click();
    cy.get('#flash').should('exist')
      .should('contain.text', ' Your password is invalid!');
  });

  it('should login with valid creds', () => {
    cy.get('#username').should('exist').type(validUsername);
    cy.get('#password').should('exist').type(validPassword);
    cy.get('.radius').should('exist').click();
    cy.get('#flash').should('exist')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should logout from the app', () => {
    cy.get('#username').should('exist').type(validUsername);
    cy.get('#password').should('exist').type(validPassword);
    cy.get('.radius').should('exist').click();
    cy.get('.button').should('exist').click();
    cy.get('#flash').should('exist')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
