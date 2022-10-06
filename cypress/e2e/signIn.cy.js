/// <reference types="cypress" />

// const { contains } = require("cypress/types/jquery");

describe ('login with Login with valid creds', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'
  before(() => {
    cy.visit('/login');
  })
  it('log in', () => {
    cy.get('[id="username"]')
      .type(username)
      .get('[id="password"]')
      .type(password)
      .get('.fa').click();
  });
  it('assert login', () => {
    cy.get('h4').contains('Welcome to the Secure Area');
  });
});

  
 