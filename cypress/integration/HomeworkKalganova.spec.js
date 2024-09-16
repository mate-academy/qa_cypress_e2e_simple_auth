/// <reference types="cypress" />
describe('', () => {
  // const username = 'userName' + Math.floor(Math.random() * 1000);
  // const useremail = 'userEmail' + Math.floor(Math.random() * 1000) + '@gmail.com';


  before('', () => {
    cy.visit ('https://the-internet.herokuapp.com/login');
  });
  it('should log in registered user', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').contains('You logged into a secure area!').should('exist'); 
  });

  it('should confirm user logged out', () => {
    cy.get('.button').click();
    cy.get('[data-alert]').contains('You logged out of the secure area!').should('exist');
  });


it('should display error massage', () => {
  cy.get('#username').type('timon');
  cy.get('#password').type('Yesssssssssssssss');
  cy.get('.fa').click();
  cy.get('[data-alert]').contains('Your username is invalid').should('exist');

});
});