/// <reference types="cypress" />

const username = 'tomsmith';
const pw = 'SuperSecretPassword!';

describe('Sign In page', () => {
  it('should sign in with correct creds', () => {
    cy.login(username, pw);
    cy.url().should('include', '/secure');

    cy.get('.flash.success')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  it(`shouldn't sign in with incorrect creds`, () => {
    cy.login('tom', 'Super');
    cy.url().should('include', '/login');

    cy.get('.flash.error')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });
});

describe('Sign Out page', () => {
  beforeEach(() => {
    cy.login(username, pw);
    cy.url().should('include', '/secure');
  });

  it('should sign out', () => {
    cy.get('.button.secondary.radius').click();

    cy.get('.flash.success')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
