/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should login user with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .contains('You logged into a secure area!');
  });

  it('Should not login user with invalid credentials', () => {
    cy.get('#username')
      .type('tom');
    cy.get('#password')
      .type('notSecurePassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .contains('Your username is invalid!');
  });

  it('Should logout user', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('.button').contains('Logout')
      .click();
    cy.get('#flash')
      .contains('You logged out of the secure area!');
  });
});

// 1. Login with valid creds ( tomsmith / SuperSecretPassword! ):
// - assert you successfully logged in.
// 2. Login with invalid creds (invalid Username, invalid Password):
// - assert validation errors.
// 3. Logout from the app:
// - assert you successfully logged out.
