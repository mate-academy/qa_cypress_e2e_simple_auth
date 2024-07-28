/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const wrongUsername = 'AdolfCat';
const wrongPasword = 'Test123';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('User can login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('User cannot login with invalid creds', () => {
    cy.get('#username').type(wrongUsername);
    cy.get('#password').type(wrongPasword);
    cy.get('[type="submit"]').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('User can logout from app after successful login ', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('[href="/logout"]').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
