/// <reference types="cypress" />

describe('User shoul not be able', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    });

it('to Login with invalid username', () => {
    cy.get('#username')
    .type('tomsmit');

    cy.get('#password')
    .type('SuperSecretPassword!');

    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain', 'Your username is invalid!');
  });
});

describe('User shoul not be able', () => {
    before(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    });

it('to Login with invalid password', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword');

    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain', 'Your password is invalid!');
  });
});