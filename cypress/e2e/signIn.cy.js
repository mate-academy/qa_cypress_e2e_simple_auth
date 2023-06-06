/// <reference types="cypress" />

describe('Sign In page', () => {
  const user = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUser = 'invalid Username';
  const invalidPassword = 'invalid Password';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username')
      .type(user);

    cy.get('#password')
      .type(password);

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should throw error with invalid creds', () => {
    cy.get('#username')
      .type(invalidUser);

    cy.get('#password')
      .type(invalidPassword);

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should logout after successfull logged in', () => {
    cy.get('#username')
      .type(user);

    cy.get('#password')
      .type(password);

    cy.contains('button', 'Login')
      .click();

    cy.contains('a', 'Logout')
      .should('exist')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
