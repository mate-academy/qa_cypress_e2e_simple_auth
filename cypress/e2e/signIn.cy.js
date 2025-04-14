/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should be login page', () => {
    cy.url().should('include', '/login');
  });

  it('should fields are filled and login is successful', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('Logined with invalid creds', () => {
    cy.get('#username').type('invalid');
    cy.get('#password').type('invalidPassword!');
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('loguot is successful', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.button').click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
