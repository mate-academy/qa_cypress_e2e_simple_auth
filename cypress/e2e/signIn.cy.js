/// <reference types='cypress' />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  it('should assert auth with valid data', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('#flash').should('include.text', 'You logged into a secure area!');
  });

  it('should assert validation message with invalid data', () => {
    cy.get('#username').type('tomsmith1');
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('#flash').should('include.text', 'Your username is invalid!');
  });

  it('should successfuly log out', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();

    cy.get('#flash').should('include.text', 'You logged into a secure area!');

    cy.get('.button').contains('Logout').click();

    cy.get('#flash')
      .should('include.text', 'You logged out of the secure area!');
  });
});
