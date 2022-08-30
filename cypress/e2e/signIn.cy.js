/// <reference types="cypress" />

describe('Successfull Login', () => {
    it('should log in with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    
        cy.get('[name="username"]')
        .type('tomsmith');

        cy.get('[name="password"]')
        .type('SuperSecretPassword!');

        cy.contains('.fa', 'Login')
        .click();

        cy.get('#flash')
        .should('contain.text', 'You logged into a secure area!')

    });

    it('should show error after invalid login', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
            
        cy.get('[name="username"]')
        .type('invalid');
        
        cy.get('[name="password"]')
        .type('SuperSecretPassword!');
        
        cy.contains('.fa', 'Login')
        .click();
        
        cy.get('#flash')
        .should('contain.text', 'Your username is invalid')
        });

    it('should show error after invalid password', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
            
        cy.get('[name="username"]')
        .type('tomsmith');
        
        cy.get('[name="password"]')
        .type('wrong');
        
        cy.contains('.fa', 'Login')
        .click();
        
        cy.get('#flash')
        .should('contain.text', 'Your password is invalid!')
    
    
    });
        

    it('should logout from the account', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
                
        cy.loginSuccess();
                   
        cy.contains('.button', 'Logout')
        .click();
            
        cy.get('#flash')
        .should('contain.text', 'You logged out of the secure area!')
            
        });

    });
