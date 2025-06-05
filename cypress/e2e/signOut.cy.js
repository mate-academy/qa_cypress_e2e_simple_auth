/// <reference types="cypress" />
describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should singOut from the account', () => {
    cy.login();

    cy.contains('.button', 'Logout').click();

    cy.url().should('contain', '/login');

    cy.contains('#flash', 'You logged out of the secure area!');
  });
});
