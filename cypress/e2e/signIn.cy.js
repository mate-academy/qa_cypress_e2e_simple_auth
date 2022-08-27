/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('/login')
  });

  it('should allow to login with existing data', () => {
    cy.get('#username')
     .type(username);

    cy.get('#password')
     .type(password);

    cy.contains('i','Login')
     .click();

    cy.contains('You logged into a secure area!')
     .should('be.visible');
  });

  it('should not allow login with an unregistered username', () => {
    cy.get('#username')
     .type(`${username}a`);

    cy.get('#password')
     .type(password);

    cy.contains('i','Login')
     .click();

    cy.contains('Your username is invalid!')
     .should('be.visible');
  });

  it('should not allow login with empty username', () => {
    cy.get('#password')
     .type(password);

    cy.contains('i','Login')
     .click();

    cy.contains('Your username is invalid!')
     .should('be.visible');
  });

  it('should not allow login with an unregistered password for the current username', () => {
    cy.get('#username')
     .type(username);
    
    cy.get('#password')
     .type(`${password}a`);

    cy.contains('i','Login')
     .click();

    cy.contains('Your password is invalid!')
     .should('be.visible');
  });

  it('should not allow login with an empty password', () => {
    cy.get('#username')
     .type(username);

    cy.get('i')
     .click();

    cy.contains('Your password is invalid!')
     .should('be.visible');
  });

  it.only('should allow to logout', () => {
    cy.get('#username')
     .type(username);

    cy.get('#password')
     .type(password);

    cy.contains('i','Login')
     .click();

    cy.contains('You logged into a secure area!')
     .should('be.visible');

    cy.get('[href="/logout"]')
     .click();

    cy.contains('You logged out of the secure area!')
     .should('be.visible');
  });
});
