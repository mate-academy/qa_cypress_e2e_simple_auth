/// <reference types="cypress" />

describe('Sign In page', () => { });
it('Should provide an ability to Log In with valid creds  ', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('Should provide an ability to Log Out from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/secure');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button').click();
    cy.get('h2').should('contain.text', 'Login Page');
  });

 it('Should not provide an ability to Log In with invalid username', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').type('invalid');
  cy.get('#password').type('SuperSecretPassword!');
  cy.get('.fa').click();
  cy.get('#flash').should('contain', ' Your username is invalid!');
});

it('Should not provide an ability to Log In with invalid password', () => {
  cy.visit('https://the-internet.herokuapp.com/login');
  cy.get('#username').type('tomsmith');
  cy.get('#password').type('invalid');
  cy.get('.fa').click();
  cy.get('#flash').should('contain', ' Your password is invalid!');
});
