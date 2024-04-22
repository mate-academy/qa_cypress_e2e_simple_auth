/// <reference types="cypress" />
const { username, passwd, invalidUsername, invalidPassword } =
require('../support/variables');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`https://the-internet.herokuapp.com/login`);
  });

  it('should allow to login with valid credentials', () => {
    cy.url().should(`include`, 'login');
    cy.get('[id = "username"').type(username);
    cy.get('[id = "password"').type(passwd);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should allow to log out from the app', () => {
    cy.url().should(`include`, 'login');
    cy.get('[id = "username"').type(username);
    cy.get('[id = "password"').type(passwd);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').contains('You logged out of the secure area!');
  });

  it('should not allow to login with invalid username', () => {
    cy.url().should(`include`, 'login');
    cy.url().should(`include`, 'login');
    cy.get('[id = "username"').type(invalidUsername);
    cy.get('[id = "password"').type(passwd);
    cy.get('button').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not allow to login with invalid password', () => {
    cy.url().should(`include`, 'login');
    cy.url().should(`include`, 'login');
    cy.get('[id = "username"').type(username);
    cy.get('[id = "password"').type(invalidPassword);
    cy.get('button').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});
