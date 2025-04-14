/// <reference types="cypress" />

describe('Sign In page', () => {
  const login = (username, password) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
  };

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    login('tomsmith', 'SuperSecretPassword!');
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });
  it('should not login with invalid creds', () => {
    login('1', '1');
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
  it('should logout from the app', () => {
    login('tomsmith', 'SuperSecretPassword!');
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });

});
