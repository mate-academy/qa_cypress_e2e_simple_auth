/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = validUsername + '1';
  const invalidPassword = validPassword + '1';

  it('should log in with valid data', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not log in with invalid username', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not log in with invalid password', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });
  it('should log out with valid data', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('[href="/logout"]').click();
    cy.get('#flash-messages')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
