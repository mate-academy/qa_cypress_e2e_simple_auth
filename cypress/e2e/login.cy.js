/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username')
    .type('tomsmith')

    cy.get('#password')
    .type('SuperSecretPassword!')

    cy.contains('.fa.fa-2x', 'Login')
    .click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!')

    cy.contains('.icon-2x.icon-signout', 'Logout')
    .click();
  });

  it('Login with invalid Username', () => {
    cy.get('#username')
    .type('tomsmis')

    cy.get('#password')
    .type('SuperSecretPassword!')

    cy.contains('.fa.fa-2x', 'Login')
    .click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });

  it('Login with invalid Username', () => {
    cy.get('#username')
    .type('tomsmith')

    cy.get('#password')
    .type('SuperSecretPassword1')

    cy.contains('.fa.fa-2x', 'Login')
    .click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!')
  });
});
