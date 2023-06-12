/// <reference types="cypress" />


it('User can login with valid creds (tomsmith/SuperSecretPassword!)', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith').should('have.value', 'tomsmith');
    cy.get('#password').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
});

it('User can\'t login with invalid creds, error message must appear', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tanya').should('have.value', 'tanya');
    cy.get('#password').type('NotASecretPassword!').should('have.value', 'NotASecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'is invalid');
});

it('User can logout from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith').should('have.value', 'tomsmith');
    cy.get('#password').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
});
