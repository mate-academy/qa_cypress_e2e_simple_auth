/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });
  it('should not provide an ability to login with invalid username', () => {
    cy.get('#username')
      .type('test123');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });
  it('should not provide an ability to login with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });
  it('should provide successfully logged out', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    cy.get('button.radius[type="submit"]')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
