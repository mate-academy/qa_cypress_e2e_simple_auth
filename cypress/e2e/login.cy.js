/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username').type("tomsmith");
    cy.get('#password').type("SuperSecretPassword!");
    cy.get('.fa').click();
    cy.wait(4000);
    cy.get('h4.subheader').should('have.text','Welcome to the Secure Area. When you are done click logout below.');
  });

  it('Logout from the app', () => {
    cy.get('#username').type("tomsmith");
    cy.get('#password').type("SuperSecretPassword!");
    cy.get('.fa').click();
    cy.wait(4000);
    cy.get('h4.subheader').should('have.text','Welcome to the Secure Area. When you are done click logout below.');
    cy.get('.icon-2x.icon-signout').click();
    cy.get("#flash").should("include.text", "You logged out of the secure area!");
  });


  it('Login with invalid creds', () => {
    cy.get('#username').type("serhio");
    cy.get('#password').type("SerhioPassword!");
    cy.get('.fa').click();
    cy.get("#flash").should("include.text", "Your username is invalid!");
  });  
});
