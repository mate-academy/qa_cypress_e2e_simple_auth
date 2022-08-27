/// <reference types="cypress" />


describe('Login page', () => {
    const userName = 'tomsmith';
    const password = 'SuperSecretPassword!';
    
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
      });

    it('should login with valid data', () => {
        cy.get('[name="username"]')
        .type(userName);

        cy.get('[name="password"]')
        .type(password);

        cy.get('[type="submit"]')
        .click();
        
        cy.contains('You logged into a secure area!')
        .should('be.visible');
    });

    it('should logout successfully', () => {
        cy.loginUser(userName, password);
        
        cy.get('[class="icon-2x icon-signout"]')
        .click();

        cy.contains('You logged out of the secure area!')
        .should('be.visible');

    });

    it('should not login with invalid username', () => {
        cy.get('[name="username"]')
        .type('khrystyna');

        cy.get('[name="password"]')
        .type('password');

        cy.get('[type="submit"]')
        .click();

        cy.contains('Your username is invalid!')
        .should('be.visible');

    });

    it('should not login with invalid password', () => {
        cy.get('[name="username"]')
        .type(userName);

        cy.get('[name="password"]')
        .type('SuperSecretPassword');

        cy.get('[type="submit"]')
        .click();

        cy.contains('Your password is invalid!')
        .should('be.visible');

    });
});
