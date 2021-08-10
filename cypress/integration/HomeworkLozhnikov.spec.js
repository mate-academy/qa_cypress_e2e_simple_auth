/// <reference types="cypress" />

describe('Login with valid creds', () => {
  before('', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.success').contains('You logged into a secure area!').should('exist');
  })
});

describe('Login with invalid creds', () => {
  before('', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('', () => {
    cy.get('#username').type('Vasyl');
    cy.get('#password').type('asdfgh');
    cy.get('.radius').click();
    cy.get('.error').contains('Your username is invalid!').should('exist');
  })
});

describe('Logout from app', () => {
  before('', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.success').contains('You logged into a secure area!').should('exist');
    cy.get('.button').click();
    cy.get('.success').contains('You logged out of the secure area!').should('exist');
  })
});