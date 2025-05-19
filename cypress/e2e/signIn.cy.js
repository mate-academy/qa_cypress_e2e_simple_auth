/// <reference types="cypress" />
const { generateUser, generateFakeUser } = require('./generateUser.cy.js');

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should allow to log in with valid creds', () => {
    const { username, password } = generateUser();

    cy.get(':nth-child(1) > .large-6').type(username);
    cy.get(':nth-child(2) > .large-6').type(password);
    cy.get('.radius').click();
    cy.get('h2').should('contain.text', 'Secure Area');
  });

  it('should allow to log out from valid creds', () => {
    const { username, password } = generateUser();

    cy.get(':nth-child(1) > .large-6').type(username);
    cy.get(':nth-child(2) > .large-6').type(password);
    cy.get('.radius').click();
    cy.get('h2').should('contain.text', 'Secure Area');

    cy.get('.button').click();
    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('should deny to log in with invalid creds', () => {
    const { username, password } = generateFakeUser();

    cy.get(':nth-child(1) > .large-6').type(username);
    cy.get(':nth-child(2) > .large-6').type(password);
    cy.get('.radius').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });
});
