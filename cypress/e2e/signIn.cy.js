/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should test successful login with valid credentials', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should test unuccessful login with invalid credentials', () => {
    cy.get('#username').type('qa_gsn');
    cy.get('#password').type('NotSoSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should test unuccessful login with valid login & invalid pass', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('NotSoSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should test successful login and successful logout', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('.icon-signout').click();
    cy.get('#flash').should('contain.text', 'You logged out of the secure');
  });
});
