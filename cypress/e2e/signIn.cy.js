/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide the ability to sign in', () => {
    cy.get('[id="username"]').type('tomsmith');

    cy.get('[id="password"]').type('SuperSecretPassword!');

    cy.get('[type="submit"]').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });
  it('should provide the ability to successful logout ', () => {
    cy.get('[id="username"]').type('tomsmith');

    cy.get('[id="password"]').type('SuperSecretPassword!');

    cy.get('[type="submit"]').click();

    cy.get('[class="icon-2x icon-signout"]').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

  it('should not provide the ability to sign in with invalid creds', () => {
    cy.get('[id="username"]').type('invalid Username');

    cy.get('[id="password"]').type('invalid Password');

    cy.get('[type="submit"]').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
});
