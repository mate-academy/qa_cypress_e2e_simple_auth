/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
  beforeEach(() => cy.visit('https://the-internet.herokuapp.com/login'));

  it('Should login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.contains('#flash', 'You logged into a secure area!');
  });

  it('', () => {

  it('Should not login with invalid username', () => {
    cy.get('#username').type('anton');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.contains('#flash', 'Your username is invalid!');
  });
  it('Should not login with invalid password', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPasswordf!');
    cy.get('[type="submit"]').click();
    cy.contains('#flash', 'Your password is invalid!');
  });
  it('Should logout from the app', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('[type="submit"]').click();
    cy.contains('#flash', 'You logged into a secure area!');
    cy.get('[class="button secondary radius"]').click();
    cy.contains('#flash', 'You logged out of the secure area!');
  });
});
