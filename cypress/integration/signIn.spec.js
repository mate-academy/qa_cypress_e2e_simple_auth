/// <reference types="cypress" />



describe ('Login page', () => {

    it ('should assert successfully logged in', () => {
        
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.get('[id="username"]').type('tomsmith');
        cy.get('[id="password"]').type('SuperSecretPassword!');
        cy.get('[class="radius"]').click();
        cy.get('[id="flash"]').should('contain', 'You logged into a secure area!');
    });

    it ('should shows an error', () => {
        
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.get('[id="username"]').type('bohdanqa');
        cy.get('[id="password"]').type('bohdanqa');
        cy.get('[class="radius"]').click();
        cy.get('[id="flash"]').should('contain', 'Your username is invalid!');
    });

    it.only ('should assert successfully logged in', () => {
        
        cy.visit('https://the-internet.herokuapp.com/login');

        cy.get('[id="username"]').type('tomsmith');
        cy.get('[id="password"]').type('SuperSecretPassword!');
        cy.get('[class="radius"]').click();
        cy.get('[id="flash"]').should('contain', 'You logged into a secure area!');
        cy.get('[class="button secondary radius"]').click();
        cy.get('[id="flash"]').should('contain', 'You logged out of the secure area!');
    });

});