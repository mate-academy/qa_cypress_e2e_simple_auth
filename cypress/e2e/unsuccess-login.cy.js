/// <reference types="cypress" />

describe('Unsuccessful Sign In', () => {

    it('should not login user', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
  
      cy.get('[name="username"]')
      .type('tomsmith');
  
      cy.get('[name="password"]')
      .type('Password!');
  
      cy.get('button.radius')
      .click();

      cy.url()
      .should('include','https://the-internet.herokuapp.com/login');

      cy.contains('div#flash.flash.error','Your password is invalid!')
      .should('exist');
    });
  });
  