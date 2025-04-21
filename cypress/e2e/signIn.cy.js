/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should log in successfully with correct credentials', () => {
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword');
    cy.get('button["submit"]').click();

    cy.get('#flash')
      .should('have.class', 'success')
      .and('contain', 'You logged into a secure area!');
  });

  it('should fail to log in with incorrect credentials', () => {
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword');
    cy.get('button["submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('have.class', 'error')
      .invoke('text')
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, ' ').trim();
        expect(normalizedText).to.include('Your password is invalid!');
      });
  });

  it('should log out successfully after logging in', () => {
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword');
    cy.get('button["submit"]').click();

    cy.get('a[href="/logout"]').click();

    cy.get('#flash')
      .should('have.class', 'success')
      .and('contain', 'You logged out of the secure area!');
  });
});
