/// <reference types="cypress" />

describe('Test for login with valid creds and assert you successfully logged in.', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it('Successfuly Login and logout with valid credits', () => {
            
        cy.get('#username').type('tomsmith');
            
        cy.get('#password').type('SuperSecretPassword!');
    
        cy.get('[class="fa fa-2x fa-sign-in"]').click();
    
        cy.get('div#flash.flash.success').should('contain.text', 'You logged into a secure area!');
          
        cy.get('[class="icon-2x icon-signout"]').click();

        cy.get('div#flash.flash.success').should('contain.text', 'You logged out of the secure area!');
       
           
    });
  
    it('Login with invalid credits, checking validation error', () => {
   
        cy.get('#username').type('unknownuser');
        cy.get('#password').type('invalidpassword');
        cy.get('[class="fa fa-2x fa-sign-in"]').click();
        cy.get('#flash').should('contain.text', 'Your username is invalid!');

        cy.get('#username').type('tomsmith');
        cy.get('#password').type('invalidpassword');
        cy.get('[class="fa fa-2x fa-sign-in"]').click();
        cy.get('#flash').should('contain.text', 'Your password is invalid!');  

    });
});
