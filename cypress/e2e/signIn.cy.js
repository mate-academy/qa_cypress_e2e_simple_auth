/// <reference types='cypress' />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login > button > i').click();

    cy.get('#flash').should('be.visible');
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('Login with invalid username', () => {
    cy.get('#username').type(`${username}_1`);
    cy.get('#password').type(password);
    cy.get('#login > button > i').click();

    cy.get('#flash').should('be.visible');
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Login with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(`${password}_1`);
    cy.get('#login > button > i').click();

    cy.get('#flash').should('be.visible');
    cy.contains('Your password is invalid!').should('be.visible');
  });
  it('Logout from the app', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#login > button > i').click();

    cy.get('#content > div > a > i').click();
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
