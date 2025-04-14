/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {

  });

  it('should succesfully login and logout', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.visit('/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password + '{enter}');

    cy.contains('div', 'You logged into a secure area!');
    cy.contains('i', 'Logout').click();
    cy.contains('div', 'You logged out of the secure area!');
  });

  it('should return error if wrong login and password', () => {
    const username = 'ffff';
    const password = 'fffffffffff';

    cy.visit('/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password + '{enter}');

    cy.contains('div', 'Your username is invalid!');
  });
});
