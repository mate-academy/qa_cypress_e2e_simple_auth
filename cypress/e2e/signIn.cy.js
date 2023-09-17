/// <reference types="cypress" />
const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';
const invalidUsername = 'maxsmith1';
const invalidPassword = 'NotSuperSecretPassword!'

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

    it('assert successfully log in', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!')
  });


    it('assert successfully log out', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!')
  });

  it('assert validation error "Your username is invalid!"', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'Your username is invalid!')
  });

  it('assert validation error "Your password is invalid!"', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'Your password is invalid!')
  });
})

