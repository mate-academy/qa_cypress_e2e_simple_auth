/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('h4.subheader').should('contains.text', 'Welcome');
     });

  it('should display a validation message if creds are invalid', () => {
    cy.get('#username').type('Anastasiia');
    cy.get('#password').type('Stelmakh');
    cy.get('.radius').click();
    cy.get('.flash.error').should('contains.text', 'invalid');
      });   

  it('should provide an ability to log out for logged in users', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.icon-2x.icon-signout').click();
    cy.get('.flash.success').should('contains.text', 'You logged out');
      });        
});
