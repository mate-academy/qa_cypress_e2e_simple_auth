/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });
  it('Should login with valid creds', () => {
    cy.get('#username')
    .type(`tomsmith`);
    
    cy.get('#password')
    .type(`SuperSecretPassword!`)
    
    cy.get('.radius')
    .click();
    
    cy.get('#flash')
    .should('contain','You logged into a secure area!')
  });

  it('Login with invalid Username', () => {
    cy.get('#username')
    .type(`invalidUsername`);
    
    cy.get('#password')
    .type(`SuperSecretPassword!`)
    
    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain', 'Your username is invalid!')
  });

  it('Login with invalid password', () => {
    cy.get('#username')
    .type(`tomsmith`);
    
    cy.get('#password')
    .type(`invalidPassword!`)
    
    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain', 'Your password is invalid!')
  });

  it('Logout from the app', () => {
    cy.get('#username')
    .type(`tomsmith`);
    
    cy.get('#password')
    .type(`SuperSecretPassword!`)
    
    cy.get('.radius')
    .click();

    cy.get('.button')
    .click();

    cy.get('#flash')
    .should('contain', 'You logged out of the secure area!')
    
  });
});
