/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();
    
    cy.get('#flash')
      .should('contain.text','You logged into a secure area!');
  });

  it('should be able to logout', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.contains('.button', 'Logout')
      .click();
  });

  it('login with invalid username', () => {
    cy.get('#username')
      .type('tester333');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text','Your username is invalid!');
  });

  it('login with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('invalidpassword');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text','Your password is invalid!');
  });
});
