/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('The login page should be reachable', () => {
    cy.url().should('include', 'https://the-internet.herokuapp.com/login');
  })

  it('The user should be able to log in with valid creds', () => {
    cy.get("#username").type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .should('contain.text', 'You logged into a secure area!');
  });
  
  it('The validation message "Your username is invalid!" should appear when username is not valid', () => {
    cy.get("#username").type('tomsmit');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .should('contain.text', 'Your username is invalid!');
  })

  it('The validation message "Your password is invalid!" should appear when password is not valid', () => {
    cy.get("#username").type('tomsmith');

    cy.get('#password').type('SuperSecretPassword');

    cy.get('[type="submit"]').click();

    cy.get('#flash')
      .should('be.visible')
      .should('contain.text', 'Your password is invalid!');
  })

  it('User should be able to log out', () => {
    cy.get("#username").type('tomsmith');

    cy.get('#password').type('SuperSecretPassword!');

    cy.get('[type="submit"]').click();

    cy.get('.icon-signout').click();

    cy.get('#flash')
      .should('be.visible')
      .should('contain.text', 'You logged out of the secure area!')
  })
});
