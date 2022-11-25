/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('should be possible to login with valid data and then logout', () => {
    cy.get('#username')
        .type('tomsmith');

    cy.get('#password')
        .type('SuperSecretPassword!');

    cy.contains('button', 'Login')
        .click();

    cy.get('#flash')
        .should('contain.text', 'You logged into a secure area!');

    cy.contains('a', 'Logout')
        .click();

    cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!')
  });

  it(`shouldn't be possible to login with invalid data`, function() {
    cy.get('#username')
      .type('tomsmi');

    cy.get('#password')
      .type('SueetPsword!');

    cy.contains('button', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });
});
