/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid credentials', () => {
    cy.login(username, password);
    cy.checkMessage('You logged into a secure area!');
  });

  it('should show the error for an invalid username', () => {
    cy.login(`${username}2`, password);
    cy.checkMessage('Your username is invalid!');
  });

  it('should show the error for an invalid password', () => {
    cy.login(username, `${password}2`);
    cy.checkMessage('Your password is invalid!');
  });

  it('should logout', () => {
    cy.login(username, password);

    cy.get('a.button').click();
    cy.checkMessage('You logged out of the secure area!');
  });
});
