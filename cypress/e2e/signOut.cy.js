/// <reference types="cypress" />

describe('Sign Out page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should execute logOut', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!' + `{Enter}`);
    cy.contains('.icon-signout', ' Logout').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
