<reference types="cypress" />;

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should log in with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('should display validation errors with invalid credentials', () => {
    cy.get('#username').type('tmsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('should display validation errors with invalid credentials', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassw!');
    cy.get('button[type="submit"]')
      .click();

    cy.contains('Your password is invalid!').should('be.visible');
  });

  it('should log out successfully', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('button[type="submit"]')
      .click();

    cy.contains('You logged into a secure area!').should('be.visible');

    cy.get('.button.secondary.radius')
      .click();
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
