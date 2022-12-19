/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('should log in with valid creds', () => {
    cy.get('#username')
      .type(`tomsmith`);

    cy.get('#password')
      .type(`SuperSecretPassword!`);

      cy.contains('.fa', 'Login')
      .click();

      cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('should not log in with invalid username', () => {
    cy.get('#username')
      .type(`sobaka`);

    cy.get('#password')
      .type(`SuperSecretPassword!`);

      cy.contains('.fa', 'Login')
      .click();

      cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should not log in with invalid password', () => {
    cy.get('#username')
      .type(`tomsmith`);

    cy.get('#password')
      .type(`SuperSecretSobaka!`);

      cy.contains('.fa', 'Login')
      .click();

      cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('should successfully logout from the app', () => {
    cy.get('#username')
    .type(`tomsmith`);

    cy.get('#password')
    .type(`SuperSecretPassword!`);

    cy.contains('.fa', 'Login')
    .click();

    cy.get('.button')
      .should('contain.text', 'Logout')
        .click();

        cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!');
  });
});
