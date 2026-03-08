/// <reference types="cypress" />

describe('Sign In flow', () => {
  const url = 'https://the-internet.herokuapp.com/login';

  const login = (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
  };

  beforeEach(() => {
    cy.visit(url);
  });

  it('should login with valid credentials', () => {
    login('tomsmith', 'SuperSecretPassword!');

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
  });

  it('should show error with invalid username', () => {
    login('invalidUser', 'SuperSecretPassword!');

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });

  it('should show error with invalid password', () => {
    login('tomsmith', 'invalidPassword');

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });

  it('should logout successfully', () => {
    login('tomsmith', 'SuperSecretPassword!');

    cy.get('a[href="/logout"]').click();

    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
