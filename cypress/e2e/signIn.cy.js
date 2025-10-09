/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in successfully with valid credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.assertLoginSuccess();
  });

  it('should show error for invalid username', () => {
    cy.login('wrongUser', 'SuperSecretPassword!');
    cy.assertLoginError('Your username is invalid!');
  });

  it('should show error for invalid password', () => {
    cy.login('tomsmith', 'wrongPass');
    cy.assertLoginError('Your password is invalid!');
  });

  it('should log out successfully', () => {
    cy.login('tomsmith', 'SuperSecretPassword!');
    cy.logout();
    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
      .and('have.class', 'success');
  });
});
