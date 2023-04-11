/// <reference types="cypress" />



const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button.radius').contains('Login').click();

    cy.get('#flash')
    .should('contain', 'You logged into a secure area!')
  });

  it('should not provide an ability to log in with invalid data', () => {
    cy.get('#username').type(username +'1');
    cy.get('#password').type(password + '1');
    cy.get('button.radius').contains('Login').click();

    cy.get('#flash')
    .should('contain', 'Your username is invalid!')
  });

  it('should provide an ability to log out', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button.radius').contains('Login').click();
    cy.get('[href="/logout"]').click();

    cy.get('#flash')
    .should('contain', 'You logged out of the secure area!')
  });
});
