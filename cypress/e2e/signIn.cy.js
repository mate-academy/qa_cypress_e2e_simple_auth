/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should have a correct title', () => {
    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('should login with valid creds', () => {
    cy.logIn(username, password);

    cy.checkSuccessfulLogin();

    cy.checkFlashMessage('You logged into a secure area!');
  });

  it('should have error message for invalid username', () => {
    cy.logIn('wrongname', password);

    cy.checkFlashMessage('Your username is invalid!');
  });

  it('should have error message for invalid password', () => {
    cy.logIn(username, 'wrongpassword');

    cy.checkFlashMessage('Your password is invalid!');
  });

  it('should logout from the app', () => {
    cy.logIn(username, password);

    cy.checkSuccessfulLogin();

    cy.get('a.radius').should('contain.text', 'Logout').click();

    cy.checkFlashMessage('You logged out of the secure area!');
  });
});
