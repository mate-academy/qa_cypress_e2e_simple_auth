/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('user should not log in with unregistered username', () => {
    cy.get('#username').type('schwarzekatze');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'You username is invalid!');
  });

  it('user should not log in with unregistered password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('NotASecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain', 'You password is invalid!');
  });

  it('user can log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
