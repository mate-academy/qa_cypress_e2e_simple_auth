/// <reference types = "cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should be able to login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.fa-sign-in', 'Login').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/secure');
  });

  it('Shouldn\'t be able to login with invalid credentials', () => {
    cy.get('#username').type('nottomsmith');
    cy.get('#password').type('notSuperSecretPassword!');
    cy.contains('.fa-sign-in', 'Login').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login')
  });

  it('Should be able to logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.contains('.fa-sign-in', 'Login').click();
    cy.contains('.button', 'Logout').click();
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login')
  });
});
