/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/login");
  });

  it('Should login with valid creds', () => {

    cy.get('#username')
      .type('teddybelly');

    cy.get('#password')
      .type('FIFAforGAYS228');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

  });

  it("Should not login with invalid creds", () => {
   
    cy.get("#username")
      .type("teddybelly456");

    cy.get("#password")
      .type('FIFAforGAYS2158');

    cy.contains(".fa", "Login")
      .click();

    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Should logout from the app', () => {
 
    cy.get('#username')
      .type('teddybelly');

    cy.get('#password')
      .type('FIFAforGAYS228!');

    cy.contains('.fa', 'Login')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    cy.get('h2').
      should('contain.text', 'Secure Area');
    cy.contains('.button', 'Logout')
      .click();

    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});