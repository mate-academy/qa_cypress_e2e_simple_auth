/// <reference types="cypress" />
describe('Sign in ', () => {
    beforeEach(() =>{
        cy.visit('/login');
        });
    const user = {
        username : 'tomsmith',
        password : 'SuperSecretPassword!'

    };

    it('should login with valid data', () => {
                    
        cy.get('#username')
            .type(user.username);
        cy.get('#password')
            .type(user.password);
        cy.contains('button', 'Login')
            .click();
        cy.get('#flash.flash.success')
            .should('contain','You logged into a secure area!');
        cy.get('h4.subheader')
            .should('contain','Welcome to the Secure Area. When you are done click logout below.');
                   
        });

    it('should should not log in with invalid username', () => {
                        
        cy.get('#username')
            .type(' ');
        cy.get('#password')
            .type(user.password);
        cy.contains('button', 'Login')
            .click();
        cy.get('#flash.flash.error').
                should('contain','Your username is invalid!');

        });

    it('should should not log in with invalid password', () => {
                        
        cy.get('#username')
            .type(user.username);
        cy.get('#password')
            .type(" ");
        cy.contains('button', 'Login')
            .click();
        cy.get('#flash.flash.error').
                should('contain','Your password is invalid!');

        });
    


    it('should log out', () => {
                    
        cy.get('#username')
            .type(user.username);
        cy.get('#password')
            .type(user.password);
        cy.contains('button', 'Login')
            .click();
        cy.get('#flash.flash.success')
            .should('contain','You logged into a secure area!');
        cy.get('.button')
            .should('contain','Logout')
            .click();
        cy.get('#flash.flash.success')
            .should('contain','You logged out of the secure area!');
        });
  });