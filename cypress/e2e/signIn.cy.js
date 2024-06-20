/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit("/login")
  });
  
  const userNmae = 'tomsmith'
  const password = 'SuperSecretPassword!'

  it('should Login with valid creds', () => {
    cy.get('#username').type(userNmae);
    cy.get('#password').type(password);
    cy.get('.fa').click()
    cy.get('#flash').should('contain.text','You logged into a secure area!')
    cy.url().should('equal', Cypress.config().baseUrl + "secure")
  });

  it('should Login with non exist username', () => {
    cy.get('#username').type(userNmae + '_sobaka');
    cy.get('#password').type(password);
    cy.get('.fa').click()
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });

  it('should Login with non exist password', () => {
    cy.get('#username').type(userNmae);
    cy.get('#password').type(password + '_sobaka');
    cy.get('.fa').click()
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });

  it('Logout from the app',()=>{
    cy.get('#username').type(userNmae);
    cy.get('#password').type(password);
    cy.get('.fa').click()
    cy.get('#flash').should('contain.text','You logged into a secure area!')
    cy.url().should('equal', Cypress.config().baseUrl + "secure")
    cy.get('.icon-2x').click()
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  })
});

  