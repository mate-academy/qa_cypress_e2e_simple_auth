/// <reference types = "cypress" />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';
const invpassword = 'SuperSecretPassword';

describe('Login and Logout Flow', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should logIn with valid credentials', () => {
    cy.get('#username').type(username); 
    cy.get('#password').type(password); 
    cy.get('button[type="submit"]').click();
    cy.url().should('equal', 'https://the-internet.herokuapp.com/secure');  //link when user logged in
    cy.get('.flash.success').should('contain', 'You logged into a secure area!');
  });

  it('should show validation errors', () => {
    cy.get('#username').type(username); 
    cy.get('#password').type(invpassword); 
    cy.get('button[type="submit"]').click();
    cy.get('.flash.error').should('contain', 'Your password is invalid!');
  });

  it('should logOut from app', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password); 
    cy.get('button[type="submit"]').click();
    cy.get('.button.secondary').click();
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
    cy.get('.flash.success').should('contain', 'You logged out of the secure area!');
  });
});
