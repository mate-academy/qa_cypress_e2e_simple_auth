/// <reference types="cypress" />

describe('Sign In page', () => {
  const userName = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUsername = 'tomsmid';
  const invalidPassword = 'SuperNotSecretPassword';
  beforeEach(() => {
    cy.visit('/login');
  });

  it('is possible to log in with valid credentials', () => {
    // Go to Login Page and verify
    cy.get('h2').should('contain.text', 'Login Page');
    cy.get('body form').should('exist');
    // Input valid data into form
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    // Click Login button
    cy.get('[type="submit"]').click();
    // Verify successfull log in
    cy.url().should('equal', 'https://the-internet.herokuapp.com/secure');
    cy.get('div #flash-messages')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('is possible to successfully log out', () => {
    // Verify successfull log out
    cy.get('#username').type(userName);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.get('.button').contains('Logout').click();
    cy.get('div #flash-messages')
      .should('contain.text', 'You logged out of the secure area!');
    cy.get('h2').should('contain.text', 'Login Page');
  });

  it('is impossible to log in with invalid credentials', () => {
    // Go to Login Page and verify
    cy.get('h2').should('contain.text', 'Login Page');
    cy.get('body form').should('exist');
    // Verify invalid username
    cy.get('#username').type(invalidUsername);
    cy.get('#password').type(password);
    // Click Login button
    cy.get('[type="submit"]').click();
    // Verify validation error
    cy.get('div .error')
      .should('contain.text', 'Your username is invalid!');
    // Verify invalid password
    cy.get('#username').type(userName);
    cy.get('#password').type(invalidPassword);
    // Click Login button
    cy.get('[type="submit"]').click();
    // Verify validation error
    cy.get('div .error')
      .should('contain.text', 'Your password is invalid!');
  });
});
