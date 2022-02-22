/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login')
  });

  it('should contain a correct header', () => {
    cy.get('h2')
      .should('contain.text', 'Login Page')
  });

  it.only('should login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!' + '{enter}');
    
    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/secure');

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  });

  it('should login with invalid username', () => {
    cy.get('#username')
      .type('qwer' + '{enter}');
    
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
  });

  it('should login with invalid password', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('qwer!' + '{enter}');
    
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!')
  });

  it('should logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');
    
    cy.get('#password')
      .type('SuperSecretPassword!' + '{enter}');
    
    cy.get('[href="/logout"]')
      .click();
    
    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/login');
    
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
  });
});
