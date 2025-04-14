/// <reference types="cypress" />

const username = 'tomsmith';
const truePassword = 'SuperSecretPassword!';
const badUsername = 'tomsmith_2';
const badPassword = 'SuperSecretPassword!!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow user to login using valid data in Username/Password fields',
    () => {
      cy.get('#username')
        .should('exist')
        .type(username);

      cy.get('#password')
        .should('exist')
        .type(truePassword);

      cy.get('.radius')
        .contains('Login')
        .should('exist')
        .click();

      cy.get('#flash')
        .contains('You logged into a secure area!')
        .should('exist');
    });

  it('should allow user to logout', () => {
    cy.get('#username')
      .should('exist')
      .type(username);

    cy.get('#password')
      .should('exist')
      .type(truePassword);

    cy.get('.radius')
      .contains('Login')
      .should('exist')
      .click();

    cy.get('#flash')
      .contains('You logged into a secure area!')
      .should('exist');

    cy.get('.button')
      .contains('Logout')
      .should('exist')
      .click();

    cy.get('#flash')
      .contains('You logged out of the secure area!')
      .should('exist');
  });

  it('shouldn`t allow user to login using invalid data in username field',
    () => {
      cy.get('#username')
        .should('exist')
        .type(badUsername);

      cy.get('#password')
        .should('exist')
        .type(truePassword);

      cy.get('.radius')
        .contains('Login')
        .should('exist')
        .click();

      cy.get('#flash')
        .contains('Your username is invalid!')
        .should('exist');
    });

  it('shouldn`t allow user to login using invalid data in password field',
    () => {
      cy.get('#username')
        .should('exist')
        .type(username);

      cy.get('#password')
        .should('exist')
        .type(badPassword);

      cy.get('.radius')
        .contains('Login')
        .should('exist')
        .click();

      cy.get('#flash')
        .contains('Your password is invalid!')
        .should('exist');
    });
});
