/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.url()
      .should('include', '/secure');
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!');
  });
  it('should not login with invalid username', () => {
    cy.get('#username')
      .type('SerhiiSoloviov');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid!');
  });
  it('should not login with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('1234567890');
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid!');
  });
  it('should logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    cy.url()
      .should('include', '/secure');
    cy.contains('a', 'Logout')
      .click();
    cy.url()
      .should('include', '/login');
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
