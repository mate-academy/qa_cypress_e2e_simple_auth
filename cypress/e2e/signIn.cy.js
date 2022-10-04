/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  const validData = {
    username : 'tomsmith',
    password : 'SuperSecretPassword!'
 };

 it('Login with valid data', () => {
  cy.get('[id="username"]')
    .type(validData.username);
  cy.get('[id="password"]')
    .type(validData.password);
  cy.get('[class=radius]')
    .click();
  cy.get('[id="flash"]')
    .should('contain', 'You logged into a secure area!');
});

it('Login with invalid Username', () => {
  cy.get('#username')
    .type(validData.username + '1');
  cy.get('#password')
    .type(validData.password);
  cy.get('.radius')
    .click();
  cy.get('#flash')
    .should('contain', 'Your username is invalid!')
});

it('Login with invalid Password', () => {
  cy.get('#username')
    .type(validData.username);
  cy.get('#password')
    .type(validData.password + '1');
  cy.get('.radius')
    .click();
  cy.get('#flash')
    .should('contain', 'Your password is invalid!')
});

it('Logout from the app', () => {
  cy.get('#username')
    .type(validData.username);
  cy.get('#password')
    .type(validData.password);
  cy.get('.radius')
    .click();
  cy.get('#flash')
    .should('contain', 'You logged into a secure area!');
  cy.get('.button')
    .should('contain', 'Logout')
    .click();
    cy.get('.radius')
    .should('contain', 'Login');
});

});