/// <reference types="cypress" />

describe('Sign In page', () => {
  const userName = 'tomsmith';
  const userPassword = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  it('should provide an ability to log in', () => {
    // Verify the URL and page header
    cy.url().should('include', '/login');
    cy.get('h2').should('contain.text', 'Login Page');

    // Fill in the email and password fields
    cy.get('#username')
      .type(userName);

    cy.get('#password')
      .type(userPassword);

    // Click the Sign In button
    cy.get('.fa-sign-in').click();

    // Assert successful login
    cy.get('.flash.success')
      .should('contain.text', 'You logged into a secure area!');
    cy.url().should('include', '/secure');
  });

  it('should not allow to login with invalid username', () => {
    // Fill in the invalid username and valid password fields
    cy.get('#username')
      .type(userName + '_new');

    cy.get('#password')
      .type(userPassword);

    // Click the Sign In button
    cy.get('.fa-sign-in').click();

    // Assert validation error for invalid username
    cy.get('.flash.error').contains(' Your username is invalid!');

    // Verify the URL
    cy.url().should('include', '/login');
  });

  it('should not allow to login with invalid password', () => {
    // Fill in the valid username and invalid password fields
    cy.get('#username')
      .type(userName);

    cy.get('#password')
      .type(userPassword + '_new');

    // Click the Sign In button
    cy.get('.fa-sign-in').click();

    // Assert validation error for invalid password
    cy.get('.flash.error').should('contain.text', 'Your password is invalid!');

    // Verify the URL
    cy.url().should('include', '/login');
  });

  it('should assert successfull logged out', () => {
    // Fill in the username and password fields
    cy.get('#username')
      .type(userName);

    cy.get('#password')
      .type(userPassword);

    // Click the Sign In button
    cy.get('.fa-sign-in').click();

    // Click the Logout button
    cy.get('a.button.secondary.radius').click();

    // Assert successful logout
    cy.url().should('include', '/login');
  });
});
