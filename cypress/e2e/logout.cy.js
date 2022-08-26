/// <reference types="cypress" />

describe('Logout', () => {

    it('should logout user', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
  
      cy.get('[name="username"]')
      .type('tomsmith');
  
      cy.get('[name="password"]')
      .type('SuperSecretPassword!');
  
      cy.get('button.radius')
      .click();

      cy.url()
      .should('include','https://the-internet.herokuapp.com/secure');

      cy.contains('div#flash.flash.success','You logged into a secure area!')
      .should('exist');

      cy.contains('a.button.secondary.radius', 'Logout')
      .should('exist')
      .click();

      cy.contains('div#flash.flash.success','You logged out of the secure area!')
      .should('exist');

      cy.url()
      .should('include','https://the-internet.herokuapp.com/login');
    });
  });
  