/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('should have an ability to login a user with valid credentials', () => {
    cy.loginUser(username, password);

    cy.get('.flash.success')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should display the valid message for invalid password', () => {
    cy.loginUser(username, 'invalidPassword');

    cy.get('.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should display a valid message for invalid username', () => {
    cy.loginUser('invalidUsername', password);

    cy.get('.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  it(`should display the confirmation 
  message after clicking on the [Logout]`, () => {
    cy.loginUser(username, password);

    cy.get('[href="/logout"]')
      .click();

    cy.get('.flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
