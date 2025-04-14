/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/login');
});

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In page', () => {
  it('Should allow to login with valid creds', () => {
    cy.findById('username').type(username);
    cy.findById('password').type(password);
    cy.get('.fa-sign-in').click();
    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
    //cy.url().should('include', '/secure');
  });

  it('Should not login with invalid username', () => {
    cy.findById('username').type(username + Math.random().toFixed(3));
    cy.findById('password').type(password);
    cy.get('.fa-sign-in').click();
    // cy.url().should('not.include', '/secure');
    cy.get('.flash.error').should('contain', 'Your username is invalid!');
  });

  it('Should not login with invalid password', () => {
    cy.findById('username').type(username);
    cy.findById('password').type(password + Math.random().toFixed(3));
    cy.get('.fa-sign-in').click();
    cy.url().should('not.include', '/secure');
    cy.get('.flash.error').should('contain', 'Your password is invalid!');
  });
    it('Should allow to login and logout from the app', () => {
      cy.findById('username').type(username);
      cy.findById('password').type(password);
      cy.get('.fa-sign-in').click();
      cy.get('.icon-signout').click();
      //cy.url().should('include', '/login');
      cy.get('.flash.success').should('contain', 'You logged out of the secure area!');
  });
});
