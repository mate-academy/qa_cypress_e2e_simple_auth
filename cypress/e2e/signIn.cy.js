/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidusername = 'fakename';
  const invalidpassword = 'fakepassword';

  it('should provide an ability to log in with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + `{Enter}`);
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not provide an ability to log in with invalid creds', () => {
    cy.get('#username').type(invalidusername);
    cy.get('#password').type(invalidpassword + `{Enter}`);
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should provide an ability to logged out', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password + `{Enter}`);
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('[href="/logout"]').click();
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
