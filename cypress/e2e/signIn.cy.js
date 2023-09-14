/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = validUsername + 'q';
  const invalidPassword = validPassword + '1';

  it('should provide an ability to log in', () => {
    cy.get('#username')
      .type(validUsername);

    cy.get('#password')
      .type(validPassword);

    cy.get('.fa.fa-2x').click();

    cy.get('.flash.success')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not provide an ability to log in with invalid username', () => {
    cy.get('#username')
      .type(invalidUsername);

    cy.get('#password')
      .type(validPassword);

    cy.get('.fa.fa-2x').click();

    cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
  });

  it('should not provide an ability to log in with invalid password', () => {
    cy.get('#username')
      .type(validUsername);

    cy.get('#password')
      .type(invalidPassword);

    cy.get('.fa.fa-2x').click();

    cy.get('.flash.error').should('contain.text', 'Your password is invalid!');
  });

  it('should provide an ability to log out from the app', () => {
    cy.get('#username').type(validUsername);

    cy.get('#password').type(validPassword);

    cy.get('.fa.fa-2x').click();

    cy.get('.flash.success')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('.button.secondary.radius').click();

    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');

    cy.get('.flash.success')
      .should('contain.text', ' You logged out of the secure area!');
  });
});
