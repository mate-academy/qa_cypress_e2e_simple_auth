/// <reference types="cypress" />

describe('Visit Login Page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should be logged in with valid credentials', () => {

    cy.get('.example h2')
      .should('contain.text', 'Login Page');
    
    cy.get('.large-6.small-12.columns #username')
      .should('contain.text', '');

    cy.get('.large-6.small-12.columns #password')
      .should('contain.text', '');

    cy.get('.radius .fa.fa-2x.fa-sign-in')
      .should('contain.text', 'Login');

    cy.get('.large-6.small-12.columns #username')
      .type('tomsmith');

    cy.get('.large-6.small-12.columns #password')
      .type('SuperSecretPassword!');

    cy.get('.radius .fa.fa-2x.fa-sign-in')
      .click();

    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/secure');

    cy.get('#flash-messages #flash')
      .should('contain.text', 'You logged into a secure area!');
     
    cy.get('i.icon-2x.icon-signout')
      .should('contain.text', 'Logout');
  });

  it('should be logged in with incorrect credentials', () => {

    cy.get('.example h2')
      .should('contain.text', 'Login Page');
    
    cy.get('.large-6.small-12.columns #username')
      .should('contain.text', '');

    cy.get('.large-6.small-12.columns #password')
      .should('contain.text', '');

    cy.get('.radius .fa.fa-2x.fa-sign-in')
      .should('contain.text', 'Login');

    cy.get('.large-6.small-12.columns #username')
      .type('tomsmith1');

    cy.get('.large-6.small-12.columns #password')
      .type('SuperSecretPassword!1');

    cy.get('.radius .fa.fa-2x.fa-sign-in')
      .click();

    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/login');

    cy.get('#flash-messages #flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('should be logged in with incorrect credentials', () => {
    
    cy.get('.large-6.small-12.columns #username')
      .type('tomsmith');

    cy.get('.large-6.small-12.columns #password')
      .type('SuperSecretPassword!');

    cy.get('.radius .fa.fa-2x.fa-sign-in')
      .click();

    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/secure');

    cy.get('#flash-messages #flash')
      .should('contain.text', 'You logged into a secure area!');
     
    cy.get('i.icon-2x.icon-signout')
      .should('contain.text', 'Logout');

    cy.get('i.icon-2x.icon-signout')
      .click();

    cy.url()
      .should('equal', 'https://the-internet.herokuapp.com/login');

    cy.get('div#flash.flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
