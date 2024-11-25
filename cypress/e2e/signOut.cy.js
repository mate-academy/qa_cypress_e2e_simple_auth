/// <reference types="cypress" />

describe('Sign Out page', () => {
  const userName = 'tomsmith';
  const userPassword = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should execute log out', () => {
    cy.get('#username').type(userName);
    cy.get('#password')
      .type(userPassword + `{Enter}`);
    cy.contains('.icon-signout', ' Logout').click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
