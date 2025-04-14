/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('#login > button > i').click();
    cy.get('#flash-messages')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not login with invalid username', () => {
    cy.get('#username').type('efef');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('#login > button > i').click();
    cy.get('#flash-messages')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('qwert');
    cy.get('#login > button > i').click();
    cy.get('#flash-messages')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('#login > button > i').click();
    cy.get('#content > div > a').click();
    cy.get('#flash-messages')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
