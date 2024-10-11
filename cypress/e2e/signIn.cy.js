/// <reference types="cypress" />
describe('Authentication Tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('Login with invalid username', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPassword!');

    cy.get('button[type="submit"]').click();

    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('Logout after successful login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.contains('You logged into a secure area!').should('be.visible');

    cy.get('a[href="/logout"]').click();

    cy.contains('You logged out of the secure area!').should('be.visible');
    // test comment
  });
});
