/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('successfull log in with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!' + '{enter}');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/secure');
    cy.get('#flash').should('contain', 'You logged into a secure area!')
  });

  it('invalid email validation error', () => {
    cy.get('#username').type('tomsmit');
    cy.get('#password').type('SuperSecretPassword!' + '{enter}');
    cy.get('#flash').should('contain', 'Your username is invalid!')
  });

  it('invalid password validation error', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword' + '{enter}');
    cy.get('#flash').should('contain', 'Your password is invalid!')
  });

  it('succssesfull log out', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!' + '{enter}');
    cy.get('.icon-2x.icon-signout').click();
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
    cy.get('#flash').should('contain', 'You logged out of the secure area!')
  });
});
