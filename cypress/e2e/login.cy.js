/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should allow to login a user with valid creds', () => {
    cy.get('[name="username"]')
      .type('tomsmith');

    cy.get('[name="password"]')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should not allow to log in with invalid Username', () => {
    cy.get('[name="username"]')
      .type('InvalidUsername');

    cy.get('[name="password"]')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should not allow to log in with invalid Password', () => {
    cy.get('[name="username"]')
      .type('tomsmith');

    cy.get('[name="password"]')
      .type('InvalidPassword');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('should allow to log out a user', () => {
    cy.get('[name="username"]')
      .type('tomsmith');
    
    cy.get('[name="password"]')
      .type('SuperSecretPassword!');
    
    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
    
    cy.contains('.button', 'Logout')
      .click();
    
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});

