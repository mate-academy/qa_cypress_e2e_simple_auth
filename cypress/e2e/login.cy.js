/// <reference types="cypress" />

const { ceil } = require("cypress/types/lodash");

describe('Login page', () => {
  beforeEach(() => {
  cy.visit('https://the-internet.herokuapp.com/login')  
  });
  
  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.contains('button', 'Login').click()
    cy.get('body').should('contain.text', 'You logged into a secure area!')
    cy.url().should('equal', 'https://the-internet.herokuapp.com/secure');
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('tomsmith12345')
    cy.get('#password').type('SuperSecretPassword!')
    cy.contains('button', 'Login').click()
    cy.get('body').should('contain.text', 'Your username is invalid!')
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
  });

  it('Login with invalid password', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecret')
    cy.contains('button', 'Login').click()
    cy.get('body').should('contain.text', 'Your password is invalid!')
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
  });

  it('Logout after successful login', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.contains('button', 'Login').click()
    cy.contains('button', 'Logout').click()
    cy.get('body').should('contain.text', 'You logged out from the secure area!')
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
  });
});
