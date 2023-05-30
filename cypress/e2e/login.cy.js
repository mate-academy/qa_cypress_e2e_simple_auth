/// <reference types="cypress" />

describe('Login with valid creds', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
    .should('exist')
    cy.get('#username')
    .type('tomsmith')
    cy.get('#password')
    .type('SuperSecretPassword!')
    cy.get('.fa.fa-2x.fa-sign-in')
    .should('contain','Login')
    .click();
    
    cy.get('#flash')
    .should('contain','You logged into a secure area!')
    cy.get('[href="/logout"]')
    .click();
  })
  it('Logout from the app', () => {
    cy.get('#flash.flash.success')
    .should('contain','You logged out of the secure area!')
  });
  it('Login with invalid creds', () => {
    cy.get('#username')
    .type('tomsmith1')
    cy.get('#password')
    .type('SuperSecretPassword1!')

    cy.get('.fa.fa-2x.fa-sign-in')
    .should('contain','Login')
    .click()
    cy.get('#flash.flash.error')
    .should('contain','Your username is invalid!');
  });
});
