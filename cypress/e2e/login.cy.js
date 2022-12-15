/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should login user with registered credentials', () => {
    
    //fill in the fields
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    //click on the button
    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    //check the result
    cy.url()
      .should('include', 'secure');
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it(`shouldn't login user with unregistered credentials`, () => {
    
    //fill in the fields
    cy.get('#username')
      .type('tomsmith1');

    cy.get('#password')
      .type('SuperSecretPassword!1');

    //click on the button
    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    //check the result
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
  });

  it('should login user with registered credentials and log out', () => {
    
    //fill in the fields
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    //click on the button
    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    //check the result
    cy.url()
      .should('include', 'secure');
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    //click on the button
    cy.get('.radius')
      .should('contain.text', 'Logout')
      .click();

    //check the result
      cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
