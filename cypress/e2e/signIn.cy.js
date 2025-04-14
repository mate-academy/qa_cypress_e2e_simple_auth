/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';

  /*
    I decided to add the check for the correct endpoint to all tests
    to make sure the user is redirected to the needed page after login/logout
  */

  it('should allow to login with valid credentials', () => {
    cy.userLogin(validUsername, validPassword);

    // assert successful login
    cy.contains('.success', 'You logged into a secure area!');

    cy.url().should('contain', '/secure');
  });

  it('should not allow to login with invalid username', () => {
    cy.userLogin(123 + validUsername, validPassword);

    // assert validation error
    cy.contains('.error', 'Your username is invalid!');

    cy.url().should('contain', '/login');
  });

  it('should not allow to login with invalid password', () => {
    cy.userLogin(validUsername, 123 + validPassword);

    // assert validation error
    cy.contains('.error', 'Your password is invalid!');

    cy.url().should('contain', '/login');
  });

  it('should not allow to login with invalid credentials', () => {
    cy.userLogin('Bad' + validUsername, 123 + validPassword);

    // assert validation error
    cy.contains('.error', 'Your username is invalid!');

    cy.url().should('contain', '/login');
  });

  it('should allow to logout when the user is logged in', () => {
    cy.userLogin(validUsername, validPassword);

    cy.contains('a', 'Logout').click();

    // assert successful logout
    cy.contains('.success', 'You logged out of the secure area!');

    cy.url().should('contain', '/login');
  });
});
