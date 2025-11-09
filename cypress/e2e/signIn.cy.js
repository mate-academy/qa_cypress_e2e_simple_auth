/// <reference types='cypress' />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = 'totato&&';
  const invalidPassword = '1234_098password';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should have a correct title', () => {
    cy.contains('h2', 'Login Page').should('exist');
  });

  it('should allow to log in', () => {
    cy.logIn({ username, password });
    cy.contains('div[data-alert]', 'You logged into a secure area!');
    cy.contains('a[href="/logout"]', 'Logout');
  });

  it('should allow to log out', () => {
    cy.logIn({ username, password });

    cy.get('a[href="/logout"]').click();
    cy.contains('h2', 'Login Page').should('exist');
  });

  it('shows error for invalid username', () => {
    cy.logIn({ username: invalidUsername, password });
    cy.contains('h2', 'Login Page').should('exist');
    cy.contains('div[data-alert]', 'Your username is invalid!');
  });

  it('shows error for invalid password', () => {
    cy.logIn({ username, password: invalidPassword });
    cy.contains('h2', 'Login Page').should('exist');
    cy.get('div[data-alert]').should('exist');
  });

  it('shows error for invalid username and password', () => {
    cy.logIn({ username: invalidUsername, password: invalidPassword });
    cy.contains('h2', 'Login Page').should('exist');
    cy.contains('div[data-alert]', 'Your username is invalid!');
  });
});
