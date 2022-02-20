/// <reference types="cypress" />
 
describe('Login', () => {
  beforeEach(() => {
  cy.visit('/login')
  });

  it('should login with valid data', () => {
    cy.get('h2')
    .should('contain.text', 'Login Page');
   
    cy.contains('label', 'Username')
    .type('tomsmith');
    cy.contains('label', 'Password')
    .type('SuperSecretPassword!');
  
    cy.get('[class="fa fa-2x fa-sign-in"]')
    .click();

    cy.url()
    .should('include','/secure');
    cy.get('[class="flash success"]')
    .should('contain.text','You logged into a secure area!');
  
    });

    it('should not login with invalid data', () => {
      cy.get('h2')
      .should('contain.text', 'Login Page');
     
      cy.contains('label', 'Username')
      .type('tomsmith1');
      cy.contains('label', 'Password')
      .type('SuperSecretPassword!');
    
      cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();
    
      cy.url()
      .should('include','/login');
      cy.get('[class="flash error"]')
      .should('contain.text','Your username is invalid!');
    
      });

      it('should logout after click on the Logout button', () => {
        cy.get('h2')
        .should('contain.text', 'Login Page');
       
        cy.contains('label', 'Username')
        .type('tomsmith');
        cy.contains('label', 'Password')
        .type('SuperSecretPassword!');
      
        cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();
      
        cy.url()
        .should('include','/secure');
        cy.get('[class="flash success"]')
        .should('contain.text','You logged into a secure area!');

        cy.get('[class="icon-2x icon-signout"]')
        .click();

        cy.url()
        .should('include','/login');
        cy.get('[class="flash success"]')
        .should('contain.text','You logged out of the secure area!');
    
        });

   });