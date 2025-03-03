/// <reference types="cypress" />
 
describe('Users should be able', () => {
  it('login with existing username "tomsmith" and password "SuperSecretPassword!" in the database)', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username')
    .type('tomsmith')
    .should('have.value', 'tomsmith');
    cy.get('#password')
    .type('SuperSecretPassword!')
    .should('have.value', 'SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
    .should('contain', 'You logged into a secure area!');
  });
  
  it('login with not existing username in the database)', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username')
    .type('tomgold')
    .should('have.value', 'tomgold');
    cy.get('#password')
    .type('SuperSecretPassword!')
    .should('have.value', 'SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
    .should('contain', 'Your username is invalid');
  });
  
  it('login with not existing password in the database)', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username')
    .type('tomsmith')
    .should('have.value', 'tomsmith');
    cy.get('#password')
    .type('NotSuperSecretPassword!')
    .should('have.value', 'NotSuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash')
    .should('contain', 'Your password is invalid');
  });
  
  it('logout from app by clicking on [logout] button', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username')
    .type('tomsmith');
    cy.get('#password')
    .type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('a[href="/logout"]').click();
    cy.get('#flash')
    .should('contain', 'You logged out of the secure area!');
  });
 })
 