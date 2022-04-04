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
         
        cy.validaion('You logged into a secure area!'); 
    });

    it('shouldnt allow login with invalid data', () => {
        cy.get('#username')
        .type('tomsmith');

        cy.get('#password')
        .type('SuperSecretPassword' + '{enter}');

        cy.url()
          .should('include', '/login');
        
        cy.validaion('Your password is invalid!');

    });

    it('should allow successfully logout', () => {
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

        cy.validaion('You logged out of the secure area!'); 
    });
});
