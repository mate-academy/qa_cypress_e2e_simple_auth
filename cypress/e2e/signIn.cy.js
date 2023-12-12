/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {

  });

  it('should provide the ability to login with valid credentials', () => {
    const userName = 'tomsmith';
    const password = 'SuperSecretPassword!';
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('h2')
      .should('contain.text', 'Login Page');
    cy.get('body form')
      .should('exist');
    cy.get('#username')
      .type(userName);
    cy.get('#password')
      .type(password);
    cy.get('[type="submit"]')
      .click();

    cy.get('div #flash')
      .should('contain.text', 'You logged into a secure area!');
    cy.get('.button').contains('Logout')
      .click();

    cy.get('div #flash')
      .should('contain.text', 'You logged out of the secure area!');
  });

  it('should not provide the ability to login with invalid credentials', () => {
    const invalidUsername = 'tomsmid';
    const invalidPassword = 'SuperNotSecretPassword';
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('h2')
      .should('contain.text', 'Login Page');
    cy.get('body form')
      .should('exist');
    cy.get('#username')
      .type(invalidUsername);
    cy.get('#password')
      .type(invalidPassword);
    cy.get('[type="submit"]')
      .click();

    cy.get('div #flash')
      .should('contain.text', 'Your username is invalid!');
  });
});
