/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  
  it('User is able to log in with valid credentials', () => {
    cy.get('[id="username"]')
     .type ('tomsmith');
    cy.get('[id="password"]')
     .type('SuperSecretPassword!');
    cy.get('.fa')
     .click();

    cy.get('[id="flash"]')
     .should('contain', 'You logged into a secure area!')
  });

  it('User is not able to log in with invalid username', () => {
    cy.get('[id="username"]')
     .type ('tomsmiths');
    cy.get('[id="password"]')
     .type('SuperSecretPassword!');
    cy.get('.fa')
     .click();

    cy.get('[id="flash"]')
     .should('contain', 'Your username is invalid!')
  });

  it('User is not able to log in with invalid password', () => {
    cy.get('[id="username"]')
     .type ('tomsmith');
    cy.get('[id="password"]')
     .type('SuperSecretPassword!1');
    cy.get('.fa')
     .click();

    cy.get('[id="flash"]')
     .should('contain', 'Your password is invalid!')
  });

  it('User is able to log out', () => {
    cy.get('[id="username"]')
     .type ('tomsmith');
    cy.get('[id="password"]')
     .type('SuperSecretPassword!');
    cy.get('.fa')
     .click();
    cy.get('.button')
     .click();

    cy.get('[id="flash"]')
     .should('contain', 'You logged out of the secure area!')
  });
});