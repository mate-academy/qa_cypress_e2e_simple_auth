/// <reference types="cypress" />

describe('Sign In page', () => {
  const baseUrl = 'https://the-internet.herokuapp.com';
  const validUser = {
    username: 'tomsmith',
    password: 'SuperSecretPassword!'
  };

  beforeEach(() => {
    cy.visit(`${baseUrl}/login`);
  });

  it('logs in with valid credentials', () => {
    cy.get('#username').type(validUser.username);
    cy.get('#password').type(validUser.password);
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
    cy.contains('a', 'Logout').should('be.visible');
  });

  it('shows validation errors for invalid credentials', () => {
    cy.get('#username').type('wronguser');
    cy.get('#password').type(validUser.password);
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');

    cy.get('#username').clear();
    cy.get('#username').type(validUser.username);
    cy.get('#password').clear();
    cy.get('#password').type('WrongPassword');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your password is invalid!');
  });

  it('logs out successfully', () => {
    cy.get('#username').type(validUser.username);
    cy.get('#password').type(validUser.password);
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.contains('a', 'Logout').should('be.visible').click();

    cy.url().should('include', '/login');
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'You logged out of the secure area!');
  });
});
