/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable max-len */
/// <reference types='cypress' />
const { generateUser } = require('../support/generateUser');
describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + 'login');
  });
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  it('should have a title', () => {
    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('should Login with valid creds and logout', () => {
    cy.findById('username').should('exist').type(validUsername);
    cy.findById('password').should('exist').type(validPassword);
    cy.get('button[type="submit"]')
      .should('contain.text', 'Login')
      .should('exist')
      .click();
    cy.assertPageUrl('secure');
    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure');
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('h2').should('contain.text', 'Secure Area');

    cy.get('.icon-2x.icon-signout').should('exist').click();
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
    cy.get('#flash').should(
      'contain.text',
      'You logged out of the secure area!'
    );
    /* cy.request("POST", "/", {
        user: { username, password },
      }).then((response) => {
cy.setCookie("rack.session", response.body.session_id);
      } ); */
  });

  it('should not Login with invalid creds', () => {
    const { username, password } = generateUser();

    cy.findById('username')
      .should('exist')
      .not('eq', validUsername)
      .type(username);
    cy.findById('password')
      .should('exist')
      .not('eq', validPassword)
      .type(password);
    cy.get('button[type="submit"]')
      .should('contain.text', 'Login')
      .should('exist')
      .click();
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
});
