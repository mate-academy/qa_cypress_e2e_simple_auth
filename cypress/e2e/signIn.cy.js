/// <reference types="cypress" />

describe('Sign In page', () => {
  const loginUrl = 'https://the-internet.herokuapp.com/login';
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalidUser';
  const invalidPassword = 'invalidPassword';

  const selectors = {
    usernameInput: '#username',
    passwordInput: '#password',
    submitButton: 'button[type="submit"]',
    successMessage: '.success',
    errorMessage: '.error',
    logoutButton: 'a.button.secondary.radius[href="/logout"]'
  };

  beforeEach(() => {
    cy.visit(loginUrl);
  });

  const login = (username, password) => {
    cy.get(selectors.usernameInput).type(username);
    cy.get(selectors.passwordInput).type(password);
    cy.get(selectors.submitButton).click();
  };

  it('Should log in with valid credentials', () => {
    login(validUsername, validPassword);
    cy.get(selectors.successMessage).should('be.visible');
    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!');
  });

  it('Should display validation errors for invalid credentials', () => {
    login(invalidUsername, invalidPassword);

    cy.get(selectors.errorMessage).should('be.visible');
    cy.contains('Your username is invalid!');
  });

  it('Should log out successfully from the app', () => {
    login(validUsername, validPassword);

    cy.get(selectors.logoutButton).click();
    cy.get(selectors.successMessage).should('be.visible');
    cy.contains('You logged out of the secure area!');
    cy.url().should('include', '/login');
  });
});
