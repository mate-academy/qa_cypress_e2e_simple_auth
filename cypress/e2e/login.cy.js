/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('Login with valid creds ', () => {

    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('h4')
      .should('contain.text', 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');

    cy.get(':nth-child(1) > .large-6 > label')
      .should('contain.text', 'Username');

    cy.get(':nth-child(2) > .large-6 > label')
      .should('contain.text', 'Password');

    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  });

  it('Login with invalid creds ', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('h4')
      .should('contain.text', 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.');

  cy.get('#username')
    .type('invalid_username');

  cy.get('#password')
    .type('invalid_password');

  cy.get('.radius')
    .should('contain.text', 'Login')
    .click();
  
    cy.get('#flash')
    .should('contain.text', 'Your username is invalid!')
  });
  
  it('Logout from the app', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    cy.get('.button')
      .should('contain.text', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
  });
});
