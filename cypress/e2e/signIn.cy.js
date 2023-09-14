/// <reference types="cypress" />

describe('Sign In page', () => {

  const validUserName = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';

  const invalidUserName = 'user' + Math.random() * 1000;
  const invalidPassword = 'Password123!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('login with valid data', () => {

    cy.get('#username').type(validUserName);
    cy.get('#password').type(validPassword);
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!')
  });

  it('login with invalid data', () => {

    cy.get('#username').type(invalidUserName);
    cy.get('#password').type(invalidPassword);
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('#flash').should('contain', 'Your username is invalid!')
  });

  it('logout from the app', () => {
    cy.get('#username').type(validUserName);
    cy.get('#password').type(validPassword);
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('[class="icon-2x icon-signout"]').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

});
