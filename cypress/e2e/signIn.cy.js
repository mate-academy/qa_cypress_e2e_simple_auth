/// <reference types="cypress" />
const userName = 'tomsmith';
const password = 'SuperSecretPassword!';
const urlLogin = '/login';
const logInButton = '.radius';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should login with valid creds', () => {
    cy.findByPlaceholder('#username').should('exist').type(userName);
    cy.findByPlaceholder('#password').should('exist')
      .type(password);
    cy.findByPlaceholder(logInButton).should('exist').click();
    cy.url().should('not.include', urlLogin);
    cy.findByPlaceholder('#flash')
      .should('contain', 'You logged into a secure area!');
  });

  it('Should not login with invalid userName', () => {
    cy.findByPlaceholder('#username').should('exist').type(userName + '1');
    cy.findByPlaceholder('#password').should('exist')
      .type(password);
    cy.findByPlaceholder(logInButton).should('exist').click();
    cy.url().should('include', urlLogin);
    cy.findByPlaceholder('#flash')
      .should('contain', 'Your username is invalid!');
  });

  it('Should not login with invalid password', () => {
    cy.findByPlaceholder('#username').should('exist').type(userName);
    cy.findByPlaceholder('#password').should('exist')
      .type(password + '1');
    cy.findByPlaceholder(logInButton).should('exist').click();
    cy.url().should('include', urlLogin);
    cy.findByPlaceholder('#flash')
      .should('contain', 'Your password is invalid!');
  });

  it('Should successfully logout', () => {
    cy.findByPlaceholder('#username').should('exist').type(userName);
    cy.findByPlaceholder('#password').should('exist')
      .type(password);
    cy.findByPlaceholder(logInButton).should('exist').click();
    cy.findByPlaceholder('.button').should('exist').click();
    cy.url().should('include', urlLogin);
    cy.findByPlaceholder('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
