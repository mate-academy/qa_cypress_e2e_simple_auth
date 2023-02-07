/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login')
    });

  it('should login with valid creds', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.contains('.fa-sign-in', 'Login')
      .click();

    cy.url()
      .should('include', '/secure');

    cy.get('.flash.success')
      .should('contain.text','You logged into a secure area!');
  });

  it('should not login with invalid username', () => {
    cy.get('#username')
      .type(username + '01');

    cy.get('#password')
      .type(password);

    cy.contains('.fa-sign-in', 'Login')
      .click();

    cy.get('.flash.error')
      .should('contain.text','Your username is invalid!');
  });

  it('should not login with invalid password', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password + '01');

    cy.contains('.fa-sign-in', 'Login')
      .click();

    cy.get('.flash.error')
      .should('contain.text','Your password is invalid!');
  });

  it('logout', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.contains('.fa-sign-in', 'Login')
      .click();

    cy.get('.icon-signout')
      .click();

    cy.url()
      .should('equal', Cypress.config().baseUrl + '/login');

  });
});
