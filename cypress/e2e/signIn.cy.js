/// <reference types="cypress" />
const validUser = 'tomsmith';
const validPassword = 'SuperSecretPassword!';

const invalidUser = 'test123';
const invalidPassowrd = 'test123';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should log in with valid creds', () => {
    //Put valide data into the form
    cy.get('#username').type(validUser);
    cy.get('input#password').type(validPassword);
    //Click on 'Login' button
    cy.get('button').contains('Login').click();
    //Assertion
    cy.get('.success').should('contain.text', 'You logged into');
  });

  it('failed login should display validation error', () => {
    //Put invalid data into the from
    cy.get('#username').type(invalidUser);
    cy.get('#password').type(invalidPassowrd);
    //Click on 'Login' button
    cy.get('button').contains('Login').click();
    //Assertion
    cy.get('.error').should('contain.text','Your username is invalid!');
  });

  it('logged in user should be able to log out', () => {
    //Put valide data into the form
    cy.get('#username').type(validUser);
    cy.get('input#password').type(validPassword);
    //Click on 'Login' button
    cy.get('button').contains('Login').click();
    //Click on 'Logout button
    cy.get('.button').contains('Logout').click();
    //Assertion
    cy.get('.success').should('contain.text', 'You logged out')
  });
});
