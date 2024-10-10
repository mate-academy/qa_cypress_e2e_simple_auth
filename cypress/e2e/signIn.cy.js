/// <reference types="cypress" />
describe('Sign In page', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'g';
  const invalidPassword = '9';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('[id="username"]').type(validUsername);
    cy.get('[id="password"]').type(validPassword);
    cy.get('[class="fa fa-2x fa-sign-in"]').click();

    cy.url().should('include', '/secure');
  });

  it('should show validation errors with invalid credentials', () => {
    cy.get('[id="username"]').type(invalidUsername);
    cy.get('[id="password"]').type(invalidPassword);
    cy.get('[class="fa fa-2x fa-sign-in"]').click();

    cy.get('[id="flash-messages"]')
      .should('contain', 'Your username is invalid!');
  });

  it('should logout from the app', () => {
    cy.get('[id="username"]').type(validUsername);
    cy.get('[id="password"]').type(validPassword);
    cy.get('[class="fa fa-2x fa-sign-in"]').click();

    cy.url().should('include', '/secure');

    cy.get('[class="icon-2x icon-signout"]').click();
    cy.url().should('include', '/login');
  });
});
