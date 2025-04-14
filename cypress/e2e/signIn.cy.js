/// <reference types="cypress" />

describe('Sign In page', () => {
  const userName = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const successMessage = 'You logged into a secure area!';
  const errorUsernameMessage = 'Your username is invalid!';
  const errorPasswordMessage = 'Your password is invalid!';
  const loggedOutMessage = 'You logged out of the secure area!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('.radius').click();
    cy.get('.flash.success')
      .should('contain.text', successMessage)
      .and('be.visible');
  });

  it('should allow the user to log out', () => {
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('.radius').click();
    cy.get('.button.secondary.radius').click();
    cy.get('.flash.success')
      .should('contain.text', loggedOutMessage)
      .and('be.visible');
  });

  it('should report an error when entering incorrect Username', () => {
    cy.get('#username').type(userName + 1);
    cy.get('#password').type(password);
    cy.get('.radius').click();
    cy.get('#flash')
      .should('contain.text', errorUsernameMessage)
      .and('be.visible');
  });

  it('should report an error when entering incorrect Password', () => {
    cy.get('#username').type(userName);
    cy.get('#password').type(password + 1);
    cy.get('.radius').click();
    cy.get('.flash.error')
      .should('contain.text', errorPasswordMessage)
      .and('be.visible');
  });
});
