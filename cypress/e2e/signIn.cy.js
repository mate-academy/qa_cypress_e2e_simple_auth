/// <reference types="cypress" />

describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'duryndad';
  const invalidPassword = 'SuperDuperLoch!';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Allow successful Sign In', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Display validation errors for invalid username', () => {
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', ' Your username is invalid!');
  });

  it('Display validation errors for invalid password', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(invalidPassword);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', ' Your password is invalid!');
  });

  it('Should Logout from the app', () => {
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('.radius').click();
    cy.get('.button').click();
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login');
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
