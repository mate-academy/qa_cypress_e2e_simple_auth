///<reference types="cypress" />

describe('User should be able', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    let username = 'tomsmith';
    let password = 'SuperSecretPassword!';

    it('to login with valid creds', () => {
        // cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[id="username"]').type(username).should('have.value', username);
        cy.get('[id="password"]').type(password).should('have.value', password);
        cy.get('[class="fa fa-2x fa-sign-in"]').click();
        cy.get('[class="flash success"]').should('contain', 'You logged into a secure area!');        
    })

    it('to get validation error when log in with invalid username', () => {
        cy.get('[id="username"]').type('Masha').should('have.value', 'Masha');
        cy.get('[id="password"]').type(password).should('have.value', password);
        cy.get('[class="fa fa-2x fa-sign-in"]').click();
        cy.get('[class="flash error"]').should('contain', 'Your username is invalid!');
    })

    it('to get validation error when log in with invalid password', () => {
        cy.get('[id="username"]').type(username).should('have.value', username);
        cy.get('[id="password"]').type('12345Zxcvb!').should('have.value', '12345Zxcvb!');
        cy.get('[class="fa fa-2x fa-sign-in"]').click();
        cy.get('[class="flash error"]').should('contain', 'Your password is invalid!');
    })

    it('to logout from the app', () => {
        // cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('[id="username"]').type(username).should('have.value', username);
        cy.get('[id="password"]').type(password).should('have.value', password);
        cy.get('[class="fa fa-2x fa-sign-in"]').click();
        cy.get('[class="flash success"]').should('contain', 'You logged into a secure area!');
        cy.get('[class="icon-2x icon-signout"]').click();
        cy.get('[id="flash"]').should('contain', 'You logged out of the secure area!');     
    })
})