/// <reference types="cypress" />

describe('Login / Logout logic', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('log ins with valid credentials', () => {
    const userName = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.login(userName, password);

    // We could just check the title, but I wanted to check the path
    cy.url().should('equal', `${Cypress.config().baseUrl}/secure`);
  });

  it(`doesn't log in with invalid credentials`, () => {
    const userName = 'nopenonope';
    const password = 'somePassword';

    cy.login(userName, password);

    cy.contains('#flash', 'Your username is invalid!');
  });

  it('logs out successfully', () => {
    const userName = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.login(userName, password);
    cy.contains('a', 'Logout').click();

    cy.contains('#flash', 'You logged out of the secure area!');
  });
});
