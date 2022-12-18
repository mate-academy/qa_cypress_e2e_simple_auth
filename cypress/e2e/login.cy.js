/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.get('.fa').should('contain', 'You logged into a secure area!');
  });
  
  it('Login with invalid username', () => {
    cy.get('[id="username"]').type('tomiismith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.flash').should('contain', 'Your username is invalid');
  });

  it('Login with invalid password', () => {
    cy.get('[id="username"]').type('tomiismith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.flash').should('contain', 'Your password is invalid');
  });

  it('Logout from the app', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('[href="/logout"]').click();
    cy.get('.flash').should('contain','You logget out of the secure area!');
  })
});
