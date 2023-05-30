/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.contains('.fa', 'Login')
      .click()
    
      cy.get('#flash')
        .should('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid Username', () => {
    cy.get('#username')
      .type('helikopter')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.contains('.fa', 'Login')
      .click()
    
      cy.get('#flash')
        .should('contain.text', 'Your username is invalid!');
  });

  it('Login with invalid Password', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('123')

    cy.contains('.fa', 'Login')
      .click()
    
      cy.get('#flash')
        .should('contain.text', 'Your password is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username')
      .type('tomsmith')

    cy.get('#password')
      .type('SuperSecretPassword!')

    cy.contains('.fa', 'Login')
      .click()
    
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
    
    cy.get('.icon-2x')
      .click()

    cy.get('#flash')
       .should('contain.text', 'You logged out of the secure area!');

  });
});
