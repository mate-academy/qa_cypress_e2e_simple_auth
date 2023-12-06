/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  // user invalid creds username
  it('user unsuccesfoully logged in - wrong username', () => {
    const username = 'tomsmmith';
    const password = 'SuperSecretPassword!';

    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();
  });
  // user invalid creds password
  it('user unsuccesfoully logged in - wrong password', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword';

    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();
  });
  // user is valid creds
  it('user "tomsmith" succesfoully logged in', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();
  });
  // Logout from the app
  it('user "tomsmith" succesfoully logout from app', () => {
    cy.url('/secure', 'LOGIN')
      .should('exist');
    cy.get('.fa')
      .click();
  });
});
