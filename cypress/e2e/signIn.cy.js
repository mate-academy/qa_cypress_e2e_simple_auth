/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUser = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
  };

  const invalidUser = {
    username: 'test_tomsmith',
    password: 'test_tomsmith123'
  };

  const message = {
    loggedIn: 'You logged into a secure area!',
    invalidUsername: 'Your username is invalid!',
    invalidPassword: 'Your password is invalid!',
    loggedOut: 'You logged out of the secure area!'
  };

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.userLogin(validUser.username, validUser.password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', message.loggedIn);
  });

  it('should not login with invalid username', () => {
    cy.userLogin(invalidUser.username, validUser.password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', message.invalidUsername);
  });

  it('should not login with invalid password', () => {
    cy.userLogin(validUser.username, invalidUser.password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', message.invalidPassword);
  });

  it('should logout from the app', () => {
    cy.userLogin(validUser.username, validUser.password);
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', message.loggedOut);
  });
});
