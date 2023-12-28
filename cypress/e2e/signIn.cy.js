/// <reference types="cypress" />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';
describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should to login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.radius').click();
  });
  it('should not to login with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(`${password}123`);
    cy.get('.radius').click();
  });
  it('should not to login with invalid username', () => {
    cy.get('#username').type(`${username}123`);
    cy.get('#password').type(password);
    cy.get('.radius').click();
  });
});
