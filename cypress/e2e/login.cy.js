/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide an ability to login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa','Login')
      .click();

    cy.get('#flash')
      .contains('You logged into a secure area!');
  });

  it('should not allow to login with invalid username', () => {
    cy.get('#username')
      .type('tom');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa','Login')
      .click();

    cy.get('#flash')
      .contains('Your username is invalid!');
  });

  it('should not allow to login with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('Super');

    cy.contains('.fa','Login')
      .click();

    cy.get('#flash')
      .contains('Your password is invalid!');
  });

  it('should provide an ability to logout', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.contains('.fa','Login')
      .click();

    cy.get('#flash')
      .contains('You logged into a secure area!');

    cy.contains('.button','Logout')
      .click();

    cy.get('#flash')
      .contains('You logged out of the secure area!');
  });
});
