/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  const Username = 'tomsmith';
  const Password = 'SuperSecretPassword!';
  const InvalidUsername = 'invalid Username';
  const InvalidPassword = 'invalid Password';

  it('should log in with valid creds', () => {
    cy.get('#username')
      .type(Username);

    cy.get('#password')
      .type(Password);

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not log in with invalid creds', () => {
    cy.get('#username')
      .type(InvalidUsername);

    cy.get('#password')
      .type(InvalidPassword);

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('#username')
      .type(Username);

    cy.get('#password')
      .type(Password);

    cy.get('.fa')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('.button')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
