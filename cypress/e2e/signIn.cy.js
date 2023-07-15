/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should allow user to login with valid creds', () => {
    const password = 'SuperSecretPassword!';
    const username = 'tomsmith';
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[class="flash success"]')
      .should('contain', 'You logged into a secure area!');
    cy.get('[href="/logout"]').click();
    cy.get('[class="flash success"]')
      .should('contain', 'You logged out of the secure area!');
  });
  it('should not allow user to login with invalid creds', () => {
    const password = 'invalid Password';
    const username = 'invalid Username';
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[class="flash error"]')
      .should('contain', 'Your username is invalid!');
  });
  it('should allow user to logout from the app', () => {
    const password = 'SuperSecretPassword!';
    const username = 'tomsmith';
    cy.get('[id="username"]').type(username);
    cy.get('[id="password"]').type(password);
    cy.get('[type="submit"]').click();
    cy.get('[href="/logout"]').click();
    cy.get('[class="flash success"]')
      .should('contain', 'You logged out of the secure area!');
  });
});
