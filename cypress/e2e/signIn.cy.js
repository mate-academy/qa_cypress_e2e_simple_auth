/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'Test1';
  const invalidPassword = 'Test1234';
  const successMessage = 'You logged into a secure area!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should Login with valid creds', () => {
    cy.login(validUsername, validPassword);
    cy.get('.flash.success')
      .should('contain', successMessage);
  });

  it('should not Login with invalid username', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('.flash.error')
      .should('contain', 'Your username is invalid!');
  });

  it('should not Login with invalid password', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.radius').click();
    cy.get('.flash.error')
      .should('contain', 'Your password is invalid!');
  });

  it('should Logout after clicking on Logout button', () => {
    cy.login(validUsername, validPassword);
    cy.get('.button.secondary.radius').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
