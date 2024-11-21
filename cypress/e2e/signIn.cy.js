/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
  });
  const randomNum = Math.random().toString().slice(2);
  const invalidUsername = `tomsmith${randomNum}`;
  const invalidPassword = `SuperSecretPassword!${randomNum}`;
  // Define user credentials as an object
  const userCredentials = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
  };
  it('Login with valid creds', () => {
    cy.get('input[name = "username"]').type(userCredentials.username);

    cy.get('input[name = "password"]').type(userCredentials.password);

    cy.get('button[type = "submit"]').click();
    // Confirmation of logging in
    cy.contains('div', 'You logged into a secure area!');
    // Logging out
    cy.get('i[class = "icon-2x icon-signout"]').click();
    // Confirmation of logging out
    cy.contains('div', 'You logged out of the secure area!');

    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('Login with invalid username', () => {
    cy.get('input[name = "username"]').type(invalidUsername);

    cy.get('input[name = "password"]').type(userCredentials.password);

    cy.get('button[type = "submit"]').click();

    cy.contains('div', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.get('input[name = "username"]').type(userCredentials.username);

    cy.get('input[name = "password"]').type(invalidPassword);

    cy.get('button[type = "submit"]').click();

    cy.contains('div', 'Your password is invalid!');
  });

  it('Login with both invalid username and password', () => {
    cy.get('input[name="username"]').type(invalidUsername);
    cy.get('input[name="password"]').type(invalidPassword);
    cy.get('button[type="submit"]').click();
    // Assertion: Confirm that an error message indicates both invalid username and password
    cy.contains('div', 'Your username is invalid!').should('be.visible');
  });
});
