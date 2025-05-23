/// <reference types="cypress" />

describe('Sign In Page Tests', () => {
  const config = {
    loginUrl: 'https://the-internet.herokuapp.com/login',
    validUsername: 'tomsmith',
    validPassword: 'SuperSecretPassword!',
    invalidUsername: 'invalidUser',
    invalidPassword: 'invalidPassword',
    successLoginMessage: 'You logged into a secure area!',
    successLogoutMessage: 'You logged out of the secure area!',
    invalidCredentialsMessage: 'Your username is invalid!'
  };

  const selectors = {
    usernameInput: '#username',
    passwordInput: '#password',
    submitButton: 'button[type="submit"]',
    successMessage: '.success',
    errorMessage: '.error',
    logoutButton: 'a.button.secondary.radius[href="/logout"]'
  };

  beforeEach(() => {
    cy.visit(config.loginUrl);
  });

  const login = (username, password) => {
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.passwordInput).type(password);
    cy.get(selectors.submitButton).click();
  };

  it('should successfully log in with valid credentials', () => {
    login(config.validUsername, config.validPassword);

    cy.get(selectors.successMessage)
      .should('be.visible')
      .and('contain', config.successLoginMessage);
    cy.url().should('include', '/secure');
  });

  it('should display an error message for invalid credentials', () => {
    login(config.invalidUsername, config.invalidPassword);

    cy.get(selectors.errorMessage)
      .should('be.visible')
      .and('contain', config.invalidCredentialsMessage);
    cy.url().should('include', '/login');
  });

  it('should successfully log out from the application', () => {
    login(config.validUsername, config.validPassword);

    cy.get(selectors.logoutButton).should('be.visible').click();

    cy.get(selectors.successMessage)
      .should('be.visible')
      .and('contain', config.successLogoutMessage);
    cy.url().should('include', '/login');
  });
});
