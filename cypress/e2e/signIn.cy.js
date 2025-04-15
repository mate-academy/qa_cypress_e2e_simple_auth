/// <reference types="cypress" />

describe('Login and Logout Tests', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login with valid credentials', () => {
    // Enter valid credentials and submit the form
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assert that login is successful
    cy.url().should('include', '/secure'); // Adjust based on the actual URL after successful login
    cy.get('#flash.success')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
  });

  it('should show validation errors with invalid credentials', () => {
    // Enter invalid credentials and submit the form
    cy.get('#username').type('invalidUsername');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    // Assert that validation errors are displayed
    cy.get('#flash.error')
      .invoke('text')
      .then((text) => text.trim()) // Trim leading and trailing whitespace
      .should('match', /Your username is invalid!/);

    // Ensure the password error is not present in this case
    cy.get('#flash.error')
      .invoke('text')
      .then((text) => text.trim()) // Trim leading and trailing whitespace
      .should('not.match', /Your password is invalid!/);
  });
  it('should logout successfully', () => {
    // Log in with valid credentials before logging out
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Assert that login is successful
    cy.url().should('include', '/secure'); // Adjust based on the actual URL after successful login
    cy.get('#flash.success')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');

    // Log out
    cy.get('.icon-2x').click();
    // Assert that logout is successful
    cy.url().should('include', '/login'); // Adjust based on the actual URL after successful logout
    // eslint-disable-next-line max-len
    cy.get('#flash.success').should('be.visible').and('contain.text', 'You logged out of the secure area!');
  });
});
