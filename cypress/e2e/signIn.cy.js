/// <reference types="cypress" />

describe('The Internet homework', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
});

  it('should login user with valid credits', () => {
    cy.loginUser(username, password);

    cy.contains('#flash', 'You logged into a secure area!')
      .should('exist');
  });

  it('should not login user with invalid credits', () => {
    cy.get('#username')
      .type(`${username}_new`)

    cy.get('#password')
      .type(`123${password}!`)

    cy.contains('.fa-sign-in', 'Login')
      .should('exist')
      .click()

    cy.contains('#flash', 'Your username is invalid!')
      .should('exist')
  });

  it('should logout user', () => {
    cy.loginUser(username, password);

    cy.contains('Logout')
      .click()

    cy.contains('#flash', 'You logged out of the secure area!')
      .should('exist');
  });
});