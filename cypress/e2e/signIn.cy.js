/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  // Log in with a valid credentials
  it('Log in with a valid credentials', () => {
    // Visit and verify the log in page
    cy.get('h2').should('contain.text', 'Login Page');
    cy.url().should('contain', '/login');
    // Fill in Username and Password with a valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    // Click Login
    cy.get('button').contains('Login').click();
    // Assertion of successful login
    cy.get('#flash').should('have.class', 'flash success');
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.url().should('contain', '/secure');
    cy.get('h2').should('contain.text', 'Secure Area');
  });

  // Log in with an invalid username
  it('Log in with an invalid username', () => {
    // Visit and verify the log in page
    cy.get('h2').should('contain.text', 'Login Page');
    cy.url().should('contain', '/login');
    // Fill in Username and Password with an invalid username
    cy.get('#username').type('tomsmit');
    cy.get('#password').type('SuperSecretPassword!');
    // Click Login
    cy.get('button').contains('Login').click();
    // Assertion of unsuccessful login with an invalid username
    cy.get('#flash').should('have.class', 'flash error');
    cy.get('#flash').should('contain', 'Your username is invalid!');
    cy.url().should('contain', '/login');
    cy.get('h2').should('contain.text', 'Login Page');
  });

  // Log in with an invalid password
  it('Log in with an invalid password', () => {
    // Visit and verify the log in page
    cy.get('h2').should('contain.text', 'Login Page');
    cy.url().should('contain', '/login');
    // Fill in Username and Password with an invalid password
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword');
    // Click Login
    cy.get('button').contains('Login').click();
    // Assertion of unsuccessful login with an invalid password
    cy.get('#flash').should('have.class', 'flash error');
    cy.get('#flash').should('contain', 'Your password is invalid!');
    cy.url().should('contain', '/login');
    cy.get('h2').should('contain.text', 'Login Page');
  });

  // Log out
  it('Successful logout', () => {
    // Visit and verify the log in page
    cy.get('h2').should('contain.text', 'Login Page');
    cy.url().should('contain', '/login');
    // Fill in Username and Password with a valid credentials
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    // Click Login
    cy.get('button').contains('Login').click();
    // Assertion of successful login
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.url().should('contain', '/secure');
    cy.get('h2').should('contain.text', 'Secure Area');
    // Log out
    cy.get('.button.secondary.radius').contains('Logout').click();
    // Asseertion of logging out
    cy.get('#flash').should('have.class', 'flash success');
    cy.get('h2').should('contain.text', 'Login Page');
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
    cy.url().should('contain', '/login');
  });
});
