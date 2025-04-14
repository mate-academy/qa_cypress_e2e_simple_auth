/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should login with valid creds', () => {
    cy.get('h2').should('contain.text', 'Login Page');

    cy.fixture('user').then(({ username, password }) => {
      cy.get('[name=username]').type(username);
      cy.get('[name=password]').type(password);
      cy.get('.fa').click();
      cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    });
  });

  it('Should not login with an invalid username', () => {
    cy.get('h2').should('contain.text', 'Login Page');

    cy.fixture('user').then(({ password }) => {
      cy.get('[name=username]').type('testUsername');
      cy.get('[name=password]').type(password);
      cy.get('.fa').click();
      cy.get('#flash').should('contain.text', 'Your username is invalid!');
    });
  });

  it('Should not login with an invalid password', () => {
    cy.get('h2').should('contain.text', 'Login Page');

    cy.fixture('user').then(({ username }) => {
      cy.get('[name=username]').type(username);
      cy.get('[name=password]').type('Password123456!');
      cy.get('.fa').click();
      cy.get('#flash').should('contain.text', 'Your password is invalid!');
    });
  });

  it('Should logout from app', () => {
    cy.get('h2').should('contain.text', 'Login Page');

    cy.fixture('user').then(({ username, password }) => {
      cy.get('[name=username]').type(username);
      cy.get('[name=password]').type(password);
      cy.get('.fa').click();
      cy.get('#flash').should('contain.text', 'You logged into a secure area!');
      cy.get('.button').click();
      cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!');
    });
  });
});
