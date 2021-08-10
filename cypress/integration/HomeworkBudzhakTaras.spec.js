/// <reference types="cypress" />
describe('Cypress-2 Homework',() => {

    beforeEach('Visit website',() => {
cy.visit('https://the-internet.herokuapp.com/login');

});
it('Succesfull Log In', () => {
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('[class="flash success"]').should('exist');
    cy.get('[class="flash success"]').should('contain','You logged into a secure area!');
});

it('Unsuccesfull Log In', () => {
    cy.get('[name="username"]').type('taasdada');
    cy.get('[name="password"]').type('asdasdadadsa');
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('[class="flash error"]').should('exist');
});
    
it('Succesfull Log Log Out', () => {
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('[class="fa fa-2x fa-sign-in"]').click();
    cy.get('[class="flash success"]').should('exist');
    cy.reload();
    cy.get('[class="icon-2x icon-signout"]').click();
    cy.get('[class="flash success"]').should('exist');
    cy.get('[class="flash success"]').should('contain',' You logged out of the secure area!');
});
});