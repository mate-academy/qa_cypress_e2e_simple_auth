/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in', () => {
    cy.loginUser();
    cy.asertPageUrl('/secure');
  });

  it('should not log in if username or password are invalid', () => {
    cy.loginUser();
    cy.asertPageUrl('/secure');
    cy.contains('a', 'Logout');
    cy.visit('/login');

    const newName = 'Tom';
    const newPassword = '1234';
    cy.get('#username').type(newName);
    cy.get('#username').should('have.value', newName);

    cy.get('#password').type(newPassword + `{Enter}`);
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should logout user', () => {
    cy.loginUser();
    cy.asertPageUrl('/secure');
    cy.contains('a', 'Logout');
    cy.visit('/login');
  });
});
