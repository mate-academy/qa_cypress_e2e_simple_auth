/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const registeredUser = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
  };

  const massages = {
    loginSuccessful: 'You logged into a secure area!',
    invalidUsername: 'Your username is invalid!',
    invalidPassword: 'Your password is invalid!',
    logedOutSuccessful: 'You logged out of the secure area!'
  };

  const invalidData = {
    username: 'invalid Username',
    password: 'invalid Password'
  };

  it('Login with registered username and password', () => {
    cy.login(registeredUser.username, registeredUser.password);
    cy.get('#flash').should('contain', massages.loginSuccessful);
  });

  it('Login with invalid userName', () => {
    cy.login(invalidData.username, registeredUser.password);
    cy.get('#flash').should('contain', massages.invalidUsername);
  });

  it('Login with invalid password', () => {
    cy.login(registeredUser.username, invalidData.password);
    cy.get('#flash').should('contain', massages.invalidPassword);
  });

  it('Logout from the app', () => {
    cy.login(registeredUser.username, registeredUser.password);
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', massages.logedOutSuccessful);
  });
});
