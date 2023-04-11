/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in with valid creds', () => {
    cy.findById('username')
      .type(username);

    cy.findById('password')
      .type(password + '{enter}');

    cy.assertPageUrl('/secure')

    cy.findById('flash')
      .should('contain.text', 'You logged into a secure area!')
      .should('be.visible')
  });

  it('should not provide an ability to log in with invalid username', () => {
    cy.findById('username')
      .type(username + Date.now());

    cy.findById('password')
      .type(password + '{enter}');

    cy.assertPageUrl('/login')

    cy.findById('flash')
      .should('contain.text', 'Your username is invalid!')
      .should('be.visible')
  });

  it('should not provide an ability to log in with invalid password', () => {
    cy.findById('username')
      .type(username);

    cy.findById('password')
      .type(password + Date.now() + '{enter}');

    cy.assertPageUrl('/login')

    cy.findById('flash')
      .should('contain.text', 'Your password is invalid!')
      .should('be.visible')
  });

  it.only('should provide an ability to log out for logged in user', () => {
    cy.findById('username')
      .type(username);

    cy.findById('password')
      .type(password + '{enter}');

    cy.contains('a', 'Logout')
      .click();

    cy.assertPageUrl('/login')
    
    cy.findById('flash')
      .should('contain.text', 'You logged out of the secure area!')
      .should('be.visible')
  });
});
