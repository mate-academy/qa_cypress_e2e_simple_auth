/// <reference types="cypress" />

describe('Sign In and Logout Flow', () => {
  beforeEach(() => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=hn88rp');
  });

  it('should login with valid and invalid creds, and finally logout', () => {
    cy.get(':nth-child(1) > .form-control').type('tomsmith!@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('SuperSecretPassword!');
    cy.get('.btn').click();
    cy.contains('a', 'Settings').click();
    cy.contains('button', 'Or click here to logout').click();
    cy.contains('a.nav-link', 'Sign in').click();
    cy.get(':nth-child(1) > .form-control').type('Jojo123@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('Jojo123');
    cy.get('.btn').click();
    cy.get('.error-messages > li')
      .should('contain.text', 'email or password is invalid');
    cy.get('.navbar-brand').contains('conduit').click();
  });
});
