/// <reference types="cypress" />

//const cypressConfig = require("../../cypress.config");

describe('User should be able to', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  //const randomNumber = Math.random().toString().slice(2, 6);
  //const username = 'test_user-${randomNumber}';
  //const email = `${username}@mail.com`;
  //password = 'Test1234';

  //cy.request('POST', '/login', {
  //  emil,
  //  username,
  //  password
  //});

  const validData = {
    username : 'tomsmith',
    password : 'SuperSecretPassword!'
 };

 it('Log in with valid data', () => {
  cy.get('[id="username"]')
    .type(validData.username);
  cy.get('[id="password"]')
    .type(validData.password);
  cy.get('[class=radius]')
    .click();
  cy.get('[id="flash"]')
    .should('contain', 'You logged into a secure area!');
});

it('not Log in with an invalid Username', () => {
  cy.get('[id="username"]')
    .type(validData.username + '1');
  cy.get('[id="password"]')
    .type(validData.password);
  cy.get('[class=radius]')
    .click();
  cy.get('[id="flash"]')
    .should('contain', 'Your username is invalid!')
});

it('not Log in with an invalid Password', () => {
  cy.get('[id="username"]')
    .type(validData.username);
  cy.get('[id="password"]')
    .type(validData.password + '1');
  cy.get('[class=radius]')
    .click();
  cy.get('[id="flash"]')
    .should('contain', 'Your password is invalid!')
});

it('Logout from the app', () => {
  cy.get('[id="username"]')
    .type(validData.username);
  cy.get('[id="password"]')
    .type(validData.password);
  cy.get('[class=radius]')
    .click();
  cy.get('#flash')
    .should('contain', 'You logged into a secure area!');
  cy.get('[href="/logout"]')
    .should('contain', 'Logout')
    .click();
  cy.get('[class=radius]')
    .should('contain', 'Login');
  cy.url()
    .should('equal', Cypress.config().baseUrl + '/login');
});

});