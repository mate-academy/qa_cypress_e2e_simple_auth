/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const wrongUsername = 'tomsmithhhh';
const wrongPassword = 'SuperSecretPassword!!!';

describe('Login flow', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should have a title', () => {
    cy.contains('h2', 'Login Page').should('exist');
  });

  it('should log in successfully with valid credentials', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('a.button').contains('Logout').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });

  it('should show validation error with invalid credentials', () => {
    cy.get('#username').type(wrongUsername);
    cy.get('#password').type(wrongPassword);
    cy.get('button[type="submit"]').click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });
});
