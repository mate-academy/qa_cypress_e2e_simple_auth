/// <reference types="cypress" />

const username ='tomsmith';
const password = 'SuperSecretPassword!';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit ('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid credentials', () => {
    cy.get('#username')
    .type(username)
    cy.get('#password')
    .type(password)
    cy.get('.radius')
    .click()
    cy.get('#flash')
    .should('contain.text', 'You logged into a secure area!')
    cy.url ()
    .should('equal', 'https://the-internet.herokuapp.com/secure')
  });

  it('Login with wrong username', () => {
    cy.get('#username')
    .type('samsmith')
    cy.get('#password')
    .type(password)
    cy.get('.radius')
    .click ()
    cy.get('#flash')
    .should('contain.text', 'Your username is invalid!')
    cy.url()
    .should('equal', 'https://the-internet.herokuapp.com/login')
  });

  it('Login with wrong password', () => {
    cy.get('#username')
    .type(username)
    cy.get('#password')
    .type('password')
    cy.get('.radius')
    .click ()
    cy.get('#flash-messages')
    .should('contain.text', 'Your password is invalid!')
    cy.url()
    .should('equal', 'https://the-internet.herokuapp.com/login')
  });

  it ('Logout from the app', () => {
    cy.get('#username')
    .type(username)
    cy.get('#password')
    .type(password)
    cy.get('.radius')
    .click()
    cy.get('#flash')
    .should('contain.text', 'You logged into a secure area!')
    cy.url()
    .should('equal', 'https://the-internet.herokuapp.com/secure')
    cy.get('.button')
    .click()
    cy.url()
    .should('equal', 'https://the-internet.herokuapp.com/login')
    cy.get('#flash')
    .should('contain.text', 'You logged out of the secure area!')
  });

});
