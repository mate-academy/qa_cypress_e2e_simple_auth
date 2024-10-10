/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => cy.visit('https://the-internet.herokuapp.com/login'));

  const login = (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.contains('button', 'Login').click();
  };

  it('should provide an ability to log in', () => {
    cy.url().should('contain', 'login');

    login('tomsmith', 'SuperSecretPassword!');

    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.url().should('contain', 'secure');
  });

  it('should provide an ability to log out', () => {
    cy.url().should('contain', 'login');

    login('tomsmith', 'SuperSecretPassword!');

    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.url().should('contain', 'secure');

    cy.contains('a', 'Logout').click();

    cy.url().should('contain', 'login');

    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

  it('login with invalid creds (invalid Username)', () => {
    cy.url().should('contain', 'login');

    login('invalidtomsmith', 'SuperSecretPassword!');

    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('login with invalid creds (invalid Password)', () => {
    cy.url().should('contain', 'login');

    login('tomsmith', 'invalidSuperSecretPassword!');

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
});
