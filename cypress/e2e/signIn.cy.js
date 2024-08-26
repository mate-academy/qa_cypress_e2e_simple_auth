/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const userName = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('should be able to log in with valid credentials', () => {
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });
  it('should not be able to log in with invalid credentials', () => {
    cy.get('#username').type(userName + '123');
    cy.get('#password').type(password + '123');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
  it('should succesfuly log out', () => {
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
