/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  it('User can login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('User can not login with invalid creds', () => {
    cy.get('#username').type('123');
    cy.get('#password').type('Password!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
  it('User can not login with invalid creds password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type('Password!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
  it('User can logout from app after successful login ', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('[href="/logout"]').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
