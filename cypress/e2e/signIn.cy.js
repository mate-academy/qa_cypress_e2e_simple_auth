/// <reference types="cypress" />

describe('User should', () => {
  beforeEach (() => (
    cy.visit('https://the-internet.herokuapp.com/login')
  ));
    const validCred = {
      username :'tomsmith',
      password : 'SuperSecretPassword!'
   };
  it('be able to login with valid data', () => {
    cy.get('#username').type(validCred.username);
    cy.get('#password').type(validCred.password);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!')
  });
  it('not be able to login with invalid username', () => {
    cy.get('#username').type(validCred.username+1);
    cy.get('#password').type(validCred.password);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', ' Your username is invalid!')
  });
  it('not be able to login with invalid password', () => {
    cy.get('#username').type(validCred.username);
    cy.get('#password').type(validCred.password+1);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'Your password is invalid!')
  });
  it('be able to log out', () => {
    cy.get('#username').type(validCred.username);
    cy.get('#password').type(validCred.password);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!')
    cy.get('.button').should('contain', 'Logout').click()
  });
});