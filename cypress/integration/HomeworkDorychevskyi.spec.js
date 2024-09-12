/// <reference types="cypress" />

it('Log in test', () =>  {
    cy.visit('https://the-internet.herokuapp.com/login');

    // Log in with valid data
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').contains('You logged into a secure area!').should('exist');

    // Log out
    cy.get('.button').click();
    cy.get('#flash').contains('You logged out of the secure area!').should('exist');


    // Log in with invalid username
    cy.get('#username').type('topsmoyh');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').contains('Your username is invalid!').should('exist');


    // Log in with invalid password
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperPassword!');
    cy.get('.fa').click();
    cy.get('#flash').contains('Your password is invalid!').should('exist');
});


