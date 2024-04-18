/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow to login with valid credentials', () => {
    cy.fixture('user').then(({ validUsername, validPassword }) => {
      cy.get('h2').should('contain.text', 'Login Page');
      cy.get('#username').type(validUsername);
      cy.get('#password').type(validPassword);
      cy.get('.radius').click();
      cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    });
  });

  it('should allow to log out from the app', () => {
    cy.fixture('user').then(({ validUsername, validPassword }) => {
      cy.get('h2').should('contain.text', 'Login Page');
      cy.get('#username').type(validUsername);
      cy.get('#password').type(validPassword);
      cy.get('.radius').click();
      cy.get('#flash').should('contain.text', 'You logged into a secure area!');
      cy.get('.button').click();
      cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!');
    });
  });

  it('should not allow to login with invalid username', () => {
    cy.fixture('user').then(({ invalidUsername, validPassword }) => {
      cy.get('h2').should('contain.text', 'Login Page');
      cy.get('#username').type(invalidUsername);
      cy.get('#password').type(validPassword);
      cy.get('.radius').click();
      cy.get('#flash').should('contain.text', 'Your username is invalid!');
    });
  });

  it('should not allow to login with invalid password', () => {
    cy.fixture('user').then(({ validUsername, invalidPassword }) => {
      cy.get('h2').should('contain.text', 'Login Page');
      cy.get('#username').type(validUsername);
      cy.get('#password').type(invalidPassword);
      cy.get('.radius').click();
      cy.get('#flash').should('contain.text', 'Your password is invalid!');
    });
  });
});
