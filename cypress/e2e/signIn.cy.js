/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const signInPage = 'Login Page';
const sigInSucces = 'Welcome';
const invalidUsername = 'jeimelanister';
const invalidPassword = 'User123$';
const notSucces = 'Your username is invalid!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should sign in with valid creds', () => {
    cy.get('h2').should('contain', signInPage);
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('h4.subheader').should('contain', sigInSucces);
  });

  it('Should message with invalid creds', () => {
    cy.get('h2').should('contain', signInPage);
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', notSucces);
  });

  it('Should logout from the app', () => {
    cy.get('h2').should('contain', signInPage);
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('h4.subheader').should('contain', sigInSucces);
    cy.get('a.button.secondary.radius').click();
  });
});
