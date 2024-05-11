/// <reference types="cypress" />

const { defaultUser } = require('../support/defaultUser');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    const { username, password } = defaultUser();
    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not provide an ability to log in with invalid username', () => {
    const { username, password } = defaultUser();
    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');

    cy.get('#username').type(username + '_new');
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' Your username is invalid!');
  });

  it('should not provide an ability to log in with invalid password', () => {
    const { username, password } = defaultUser();
    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');

    cy.get('#username').type(username);
    cy.get('#password').type(password + '1');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', ' Your password is invalid!');
  });

  it('should provide an ability to log out', () => {
    const { username, password } = defaultUser();
    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.get('.button').contains('Logout').should('be.visible');
    cy.get('.button').click();

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
