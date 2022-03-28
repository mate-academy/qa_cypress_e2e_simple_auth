/// <reference types="cypress" />
describe('Login page',() =>{
    beforeEach(() => {
        cy.visit('/login');
    });

    it('should allow to login with valid data', () =>{
        cy.get('#username')
          .type('tomsmith');

        cy.get('#password')
          .type('SuperSecretPassword!' + '{enter}');

        cy.url()
          .should('include', '/secure');
         
        cy.get('#flash')
          .should('contain','You logged into a secure area!'); 
    });

    it('shouldnt allow login with invalid data', () => {
        cy.get('#username')
        .type('tomsmith');

        cy.get('#password')
        .type('SuperSecretPassword' + '{enter}');

        cy.url()
          .should('include', '/login');
         
        cy.get('#flash')
          .should('contain','Your password is invalid!'); 

    });

    it.only('should allow successfully logout', () => {
        cy.get('#username')
          .type('tomsmith');

        cy.get('#password')
          .type('SuperSecretPassword!' + '{enter}');

        cy.url()
          .should('include', '/secure');
         
        cy.get('#flash')
          .should('contain','You logged into a secure area!'); 

        cy.get('[class="button secondary radius"]')
          .should('contain.text', 'Logout')
          .click();
        
        cy.url()
        .should('include', '/login');

        cy.get('#flash')
          .should('contain','You logged out of the secure area!'); 
    });
});