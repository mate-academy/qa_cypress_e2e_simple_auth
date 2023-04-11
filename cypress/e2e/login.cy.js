/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';


describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username')
    .type(username);
    cy.get('#password')
    .type(password);
    cy.contains('.radius', 'Login')
    .click();
    cy.get('.subheader')
    .should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.');
  });

  it('Login with invalid username', () => {
    const randomNumber = Math.random().toString().slice(2);
    const invalidUsername = `user!-${randomNumber}`;
    const invalidPassword = 'user111';

    cy.get('#username')
    .type(invalidUsername);
    cy.get('#password')
    .type(password);
    cy.contains('.radius', 'Login')
    .click();
    cy.get('.flash.error')
    .should('contain.text', 'Your username is invalid!');
});

it('Login with invalid password', () => {
  const randomNumber = Math.random().toString().slice(2);
  const invalidUsername = `user!-${randomNumber}`;
  const invalidPassword = 'user111';

  cy.get('#username')
  .type(username);
  cy.get('#password')
  .type(invalidPassword);
  cy.contains('.radius', 'Login')
  .click();
  cy.get('.flash.error')
  .should('contain.text', 'Your password is invalid!');
});

  it('Logout from the app', () => {
    cy.login(username, password);
    cy.contains('.button.secondary.radius', 'Logout')
    .click();
    cy.get('.flash.success')
    .should('contain.text', 'You logged out of the secure area!');
});
});