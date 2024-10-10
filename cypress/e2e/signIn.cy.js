/// <reference types="cypress" />

describe('Sign In page', () => {
  const successMessage = 'You logged into a secure area!';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should Login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.success')
      .should('contain', successMessage);
  });

  it('should not Login with invalid username', () => {
    cy.get('#username').type('test1');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.flash.error')
      .should('contain', 'Your username is invalid!');
  });

  it('should not Login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Test1234');
    cy.get('.radius').click();
    cy.get('.flash.error')
      .should('contain', 'Your password is invalid!');
  });

  it('should Logout after clicking on Logout button', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button.secondary.radius').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
