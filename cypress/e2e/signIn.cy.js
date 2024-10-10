/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should log in with valid credentials', () => {
    cy.getCredForLogin();

    cy.get('#flash-messages').should('be.visible');

    cy.get('.flash.success')
      .should('contain', 'You logged into a secure area!');

    cy.url().should('contain', '/secure');
  });

  it('should not login with invalid username', () => {
    cy.getInvalidUsername();

    cy.get('#flash-messages').should('be.visible');

    cy.get('.flash.error')
      .should('contain', 'Your username is invalid!');
  });

  it('should not login with invalid password', () => {
    cy.getInvalidPassword();

    cy.get('#flash-messages').should('be.visible');

    cy.get('.flash.error')
      .should('contain', 'Your password is invalid!');
  });

  it('should successfully log out', () => {
    cy.getCredForLogin();

    cy.get('a[href="/logout"]').click();

    cy.url().should('contain', '/login');
  });
});
