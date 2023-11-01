/// <reference types='cypress' />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with registered creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('should fail to log in with not registered username', () => {
    cy.get('#username')
      .type('tomsmith1');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('should fail to log in with not registered password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!1');

    cy.get('.radius')
      .click();

    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('.radius')
      .click();

    cy.get('.icon-2x')
      .click();

    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
