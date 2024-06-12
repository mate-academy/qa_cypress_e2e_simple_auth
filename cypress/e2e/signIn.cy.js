/// <reference types="cypress" />

const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';
const invalidUsername = 'tomsmith1';
const invalidPassword = 'SuperSecretPassword'
const successfullyText = 'You logged into a secure area!';
const invalidUsernameText = 'Your username is invalid!';
const invalidPasswordText = 'Your password is invalid!';
const successfullyLogoutText = 'You logged out of the secure area!';
const url = 'https://the-internet.herokuapp.com/login';


describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(url);
  });

  it('assert successfully log in', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', successfullyText)
  });

  it('assert validation error "Your username is invalid!"', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', invalidUsernameText)
  });

  it('assert validation error "Your password is invalid!"', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', invalidPasswordText)
  });

  it('assert successfully log out', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('.button').click();
    cy.get('#flash').should('contain', successfullyLogoutText)
  });
});
