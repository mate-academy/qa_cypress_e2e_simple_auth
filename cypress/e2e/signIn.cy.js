/// <reference types="cypress" />

describe('Sign In page', () => {
  const URL = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(URL);
  });

  const login = (username, password) => {
    cy.get('h2').should('contain', 'Login Page');
    cy.get('form').should('exist');

    cy.get('input[id=username]').type(username);
    cy.get('input[id=password]').type(password);
    cy.get('button').contains('Login').click();
  };

  it('should show validation errors using invalid creds', () => {
    login('invalid_username', 'invalid_password');
    cy.get('div.error').should('exist');
  });

  it('should successfully login with valid creds', () => {
    login('tomsmith', 'SuperSecretPassword!');
    cy.get('div.success').should('exist');
  });

  it('should successfully logout', () => {
    login('tomsmith', 'SuperSecretPassword!');
    cy.get('div.success').should('exist');

    cy.get('a[href="/logout"]').click();
    cy.get('div').should('contain.text', 'You logged out of the secure area!');
  });
});
