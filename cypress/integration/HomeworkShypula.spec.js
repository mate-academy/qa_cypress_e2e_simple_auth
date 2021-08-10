/// <reference types="cypress" />

describe('User should be able', () => {
    beforeEach('Go to the site', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
    })
    //valid creds: 
    //username-tomsmith, 
    //password-SuperSecretPassword!

 it('Login with valid creds', () => {
    //filling valid creds () in the requirement fields
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    //click on the [Login]
    cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();
    //Tests for successful login
    cy.get('#flash').should('contain', 'You logged into a secure area!'); //should contain info that user logeed in
    cy.get('.subheader').should('contain', 'Welcome to the Secure Area. When you are done click logout below.'); //should contain greeting
    cy.get('[href="/logout"]').should('contain', 'Logout'); //should contain [Logout]
    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure'); //should be correct url
})

it('Login with invalid creds', () => {
    //filling invalid creds(username or password or together) in the requirement fields
    cy.get('#username').type('1tomsmith');
    cy.get('#password').type('1SuperSecretPassword');
    cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();
    // verifying data and if invalid data verify error message (if invalid all data default error message about username)
    cy.get('#flash').invoke('text').then((text) => {
        if(text.includes('Your username is invalid!')) {
            cy.get('#flash').should('contain.text', 'Your username is invalid!');
        } else  if(text.includes('Your password is invalid!')){
            cy.get('#flash').should('contain.text', 'Your password is invalid!');
        }
    })
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login') // should be the same url
})

it('Logout from app', () => {
    //filling valid creds in the requirement fields
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    //click on the [Login]
    cy.get('.fa.fa-2x.fa-sign-in').should('contain', 'Login').click();
    //click on the [Logout]
    cy.get('[href="/logout"]').should('contain', 'Logout').click();
    //test for successful logout
    cy.get('.flash.success').should('contain', 'You logged out of the secure area!'); //should contain message about successful logout
    cy.url().should('eq', 'https://the-internet.herokuapp.com/login'); // url should be on the login page(after logout)
});
});