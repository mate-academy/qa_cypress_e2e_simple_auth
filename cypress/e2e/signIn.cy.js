/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('user can log in with valid data', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('user cant log in with invalid username', () => {
    cy.get('#username').type('kristinanowitski');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('user cant log in with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword3!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('user can log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
