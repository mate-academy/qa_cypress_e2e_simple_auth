/// <reference types="cypress" />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const invalidUsername = 'Invalid username';
const invalidPassword = 'Invalid password';
const messageForInvalidUsername = 'Your username is invalid!';
const messageForInvalidPassword = 'Your password is invalid!';
const messageForLogout = 'You logged out of the secure area!';
const messageForLogIn = 'You logged into a secure area!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to successfuly log in with valid creds', () => {
    cy.get('[name="username"]')
      .type(username);
    cy.get('[name="password"]')
      .type(password);
    cy.get('[class="fa fa-2x fa-sign-in"]').contains('Login')
      .click();
    cy.url().should('include', '/secure');
    cy.get('[id="flash"]').contains(messageForLogIn)
      .should('be.visible');
  });

  it('Should not provide an ability to log in with invalid username', () => {
    cy.get('[name="username"]')
      .type(invalidUsername);
    cy.get('[name="password"]')
      .type(password);
    cy.get('[class="fa fa-2x fa-sign-in"]').contains('Login')
      .click();
    cy.get('[id="flash"]').contains(messageForInvalidUsername)
      .should('be.visible');
  });

  it('Should not provide an ability to log in with invalid password', () => {
    cy.get('[name="username"]')
      .type(username);
    cy.get('[name="password"]')
      .type(invalidPassword);
    cy.get('[class="fa fa-2x fa-sign-in"]').contains('Login')
      .click();
    cy.get('[id="flash"]').contains(messageForInvalidPassword)
      .should('be.visible');
  });

  it('should provide the ability to log out from the app', () => {
    cy.get('[name="username"]')
      .type(username);
    cy.get('[name="password"]')
      .type(password);
    cy.get('[class="fa fa-2x fa-sign-in"]').contains('Login')
      .click();
    cy.get('[class="icon-2x icon-signout"]').contains('Logout')
      .click();
    cy.get('[id="flash"]').contains(messageForLogout)
      .should('be.visible');
  });
});
