/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    cy.get('a[href="/logout"]')
      .click();
  });

  it('Login with invalid username', () => {
    cy.get('#username')
      .type('tttttt')
    cy.get('#password')
      .type('SuperSecretPassword!')
    cy.get('button[type="submit"]')
      .click()
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
  });

  it('Login with invalid password', () => {
    cy.get('#username')
      .type('tomsmith')
    cy.get('#password')
      .type('ttttttttttttttttt')
    cy.get('button[type="submit"]')
      .click()
    cy.get('#flash')
      .should('contain', 'Your password is invalid!')
  });

  it('Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    cy.get('a[href="/logout"]')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
