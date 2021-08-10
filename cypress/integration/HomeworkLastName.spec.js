/// <reference types="cypress" />

describe('User should be able ', () => {
 
  before('', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('login with valid creds', () => {

    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('.fa.fa-2x').click();

    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
  });

  it('logout from app', () => {
    cy.get('.icon-2x').click();
    cy.get('.flash.success').should('contain', 'You logged out of the secure area!');
  });

  it('login with invalid creds', () => {
    cy.get('[name="username"]').type('tomsmith1');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('.fa.fa-2x').click();

    cy.get('.row .flash.error').should('contain', 'Your username is invalid!');
 });
});