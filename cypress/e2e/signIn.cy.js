/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow to log in with valid credentials', () => {
    const user = {
      username: 'tomsmith',
      password: 'SuperSecretPassword!'
    };

    cy.getById('username').type(user.username);
    cy.getById('password').type(user.password);

    cy.submitFormByButton('Login');

    cy.isUserAuthenticated();
  });

  it('should not allow to log in with a wrong password', () => {
    const user = {
      username: 'tomsmith',
      password: 'SuperPassword'
    };

    cy.getById('username').type(user.username);
    cy.getById('password').type(user.password);

    cy.submitFormByButton('Login');

    cy.hasErrorMessage('Your password is invalid!');
  });

  it('should not allow to log in with a non existing username', () => {
    const user = {
      username: 'tombrowns',
      password: 'SuperSecretPassword!'
    };

    cy.getById('username').type(user.username);
    cy.getById('password').type(user.password);

    cy.submitFormByButton('Login');

    cy.hasErrorMessage('Your username is invalid!');
  });

  it('should allow to log out', () => {
    const user = {
      username: 'tomsmith',
      password: 'SuperSecretPassword!'
    };

    cy.logUserIn(user);

    cy
      .contains('[href="/logout"] i', 'Logout')
      .click();

    cy.contains('h2', 'Login Page');
  });
});
