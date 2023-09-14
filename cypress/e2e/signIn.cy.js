/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  const userName = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUserName = 'fakename';
  const invalidPassword = 'fakepassword';

  it('should provide an ability to log in with valid creds', () => {
    cy.get('#username').type(userName);
    cy.get('#password').type(password + `{Enter}`);
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not provide an ability to log in with invalid username', () => {
    cy.get('#username').type(invalidUserName);
    cy.get('#password').type(password + `{Enter}`);
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not provide an ability to log in with invalid password', () => {
    cy.get('#username').type(userName);
    cy.get('#password').type(invalidPassword + `{Enter}`);
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should provide an ability to logged out', () => {
    cy.get('#username').type(userName);
    cy.get('#password').type(password + `{Enter}`);
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('[href="/logout"]').click();
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
