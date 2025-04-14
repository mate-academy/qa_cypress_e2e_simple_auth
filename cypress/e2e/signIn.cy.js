/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login exist user', () => {
    cy.simpleLoginUser('tomsmith', 'SuperSecretPassword!');

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('should not login user with wrong name input', () => {
    cy.simpleLoginUser('tomsmit', 'SuperSecretPassword!');

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('should not login user with wrong email input', () => {
    cy.simpleLoginUser('tomsmith', 'SuperSeretPassword!');

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('should successfully logout', () => {
    cy.simpleLoginUser('tomsmith', 'SuperSecretPassword!');
    cy.get('a[href="/logout"]').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
