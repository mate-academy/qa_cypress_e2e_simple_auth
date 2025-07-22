/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Check Username input exist', () => {
    cy.get('#username').should('exist');
  });

  it('Check Password input exist', () => {
    cy.get('#password').should('exist');
  });

  it('Check Login button exist', () => {
    cy.get('button[type="submit"]').should('exist');
  });

  it('Should login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
  });

  it('Should not login with invalid credentials', () => {
    cy.get('#username').type('xxx');
    cy.get('#password').type('ssss!');
    cy.get('button[type="submit"]').click();
  });

  it('Check Logout button exist', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.contains('a', 'Logout').should('exist');
  });

  it('Check Logout succefully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');

    cy.get('a[href="/logout"]').click();
  });
});
