/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const signInPageTitle = 'Login Page';
const welcomePageTitle = 'You logged into a secure area!';
const invalidUsername = 'jeimelanister';
const invalidPassword = 'User123$';
const invalidUsernameMessage = 'Your username is invalid!';
const invalidPasswordMessage = 'Your password is invalid!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should sign in with valid creds', () => {
    cy.get('h2').should('contain', signInPageTitle);
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', welcomePageTitle);
  });

  it('Should message with invalid username', () => {
    cy.get('h2').should('contain', signInPageTitle);
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', invalidUsernameMessage);
  });

  it('Should message with invalid password', () => {
    cy.get('h2').should('contain', signInPageTitle);
    cy.get('#username').type(username);
    cy.get('#password').type(invalidPassword);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', invalidPasswordMessage);
  });

  it('Should logout from the app', () => {
    cy.get('h2').should('contain', signInPageTitle);
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', welcomePageTitle);
    cy.get('a.button.secondary.radius').click();
    cy.get('h2').should('contain', signInPageTitle);
  });
});
