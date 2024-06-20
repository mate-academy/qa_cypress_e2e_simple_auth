/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to log in', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.get('[id="flash"]').should('contains.text',
      'You logged into a secure area!');
  });

  it('should display validation errors after entering invalid creds', () => {
    cy.get('[id="username"]').type('username');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.get('[id="flash"]').should('contains.text', 'Your username is invalid!');
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('qwe123');
    cy.get('[type="submit"]').click();
    cy.get('[id="flash"]').should('contains.text', 'Your password is invalid!');
  });

  it('should provide an ability to log out after successful log in', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.get('[href="/logout"]').click();
    cy.get('[id="flash"]').should('contains.text',
      'You logged out of the secure area!');
  });
});
