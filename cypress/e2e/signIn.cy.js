/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should log the user correctly', () => {
    cy.loginUser(username, password);
  });

  it('should log out of the account correctly', () => {
    cy.loginUser(username, password);

    cy.contains('a', 'Logout').should('have.attr', 'href', '/logout').click();
  });

  it('should show an error if the login details are incorrect', () => {
    cy.loginUser(username + '123', password + 'asdgit ');

    cy.contains('div', 'Your username is invalid!').should(
      'have.attr',
      'id',
      'flash'
    );
  });
});
