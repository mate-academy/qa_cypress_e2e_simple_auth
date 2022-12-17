/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login user with valid creds', () => {
    
    cy.get ('[name="username"]').click().type('tomsmith')
    cy.get('[name="password"]').click().type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get ('#flash').should('contain', 'You logged into a secure area!')
  });

  it('should not login user with invalid credentials', () => {

    cy.get('[name="username"]').click().type('petrosmith');
    cy.get('[name="password"]').click().type('SuperPassword!');
    cy.get('.fa').click();
    cy.get('.flash').should('contain','Your username is invalid!')
    });

    it('should not login user with invalid credentials', () => {

      cy.get('[name="username"]').click().type('tomsmith');
      cy.get('[name="password"]').click().type('Password!');
      cy.get('.fa').click();
      cy.get('.flash').should('contain','Your password is invalid!')
      });

    it('user should be able to log out', () => {
      cy.get('[name="username"]').click().type('tomsmith');
      cy.get('[name="password"]').click().type('SuperSecretPassword!');
      cy.get('.fa').click();
      cy.contains('.icon-2x', 'Logout').click();
      cy.get ('#flash').should('contain', 'You logged out of the secure area!')
    });
  });
  
  