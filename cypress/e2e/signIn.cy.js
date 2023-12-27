/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });
  it('shouldn`t provide an ability to log in with invalid usename', () => {
    cy.get('#username').type('Username');
    cy.get('#password').type('SuperSecretPassword');
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });
  it('shouldn`t provide an ability to log in with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Password');
    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'Your password is invalid!');
  });
  it('should provide an ability to log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button.secondary.radius').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
});
