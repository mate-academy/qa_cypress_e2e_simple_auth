/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa.fa-2x.fa-sign-in').click()
    cy.get('.subheader').should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.')
    cy.get('.icon-2x.icon-signout').should('exist')
  });
  it('Login with invalid creds', () => {
    cy.get('#username').type('tomsmithsdf1')
    cy.get('#password').type('SuperSecretPasswordefefe!')
    cy.get('.fa.fa-2x.fa-sign-in').click()
    cy.get('.subheader').should('contain.text', 'This is where you can log into the secure area')
    cy.get('.fa.fa-2x.fa-sign-in').should('exist')
    cy.get('#flash[data-alert]').should('contain.text', 'Your username is invalid!');
  });
  it('Logout from the app', () => {
    cy.login('tomsmith', 'SuperSecretPassword')
    cy.get('a[href="/logout"]').click();
    cy.get('.subheader').should('contain.text', 'This is where you can log into the secure area. Enter tomsmith')
    cy.get('.fa.fa-2x.fa-sign-in').should('exist')
  });
});
