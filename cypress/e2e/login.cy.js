/// <reference types="cypress" />

describe('Login page', () => {

  const validUserName = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUserName = 'intomsmith';
  const invalidPassword = 'inSuperSecretPassword!';

  it('', () => {

    cy.visit('/login');
    cy.get('#username').type(invalidUserName);
    cy.get('#password').type(invalidPassword);
    cy.contains('.fa', 'Login').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
    
    cy.visit('/login');
    cy.get('#username').type(validUserName);
    cy.get('#password').type(validPassword);
    cy.contains('.fa', 'Login').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.contains('.button', 'Logout').click();
  });
});
