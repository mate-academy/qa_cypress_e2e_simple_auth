/// <reference types='cypress' />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should log in with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area');
  });

  it('Should show validation errors with invalid credentials', () => {
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('Should log out successfully', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area');
    cy.get('a[href="/logout"]').click();
    cy.get('#flash').should('contain.text',
      'You logged out of the secure area!');
  });
});
