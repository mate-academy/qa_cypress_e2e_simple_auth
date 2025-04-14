/// <reference types="cypress" />

describe('Sign In page', () => {
  const password = 'SuperSecretPassword!';
  const username = 'tomsmith';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not login with invalid username', () => {
    cy.get('#username').type(username + 123);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not login with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + 123);
    cy.get('.fa').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should logout from the site', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('[href="/logout"]').click();
    cy.get('[id="flash-messages"]')
      .should('include.text', 'You logged out of the secure area!');
  });
});
