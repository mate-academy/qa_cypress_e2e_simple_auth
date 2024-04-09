/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit(`/login`);
  });

  it('should login with valid creds', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!' + `{Enter}`);
    cy.url().should('equal', Cypress.config().baseUrl + '/secure');
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
      .should('be.visible');
  });

  it(`should successfully logout from the app`, () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!' + `{Enter}`);
    cy.contains('a', 'Logout').should('have.attr', 'href', '/logout').click();
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
      .should('be.visible');
    cy.url().should('equal', Cypress.config().baseUrl + '/login');
  });

  it(`should get validation errors when` +
      ` trying to login with invalid username`, () => {
    cy.get('#username').type('username');
    cy.get('#password').type('SuperSecretPassword!' + `{Enter}`);
    cy.get('#flash')
      .should('contain.text', ' Your username is invalid!')
      .should('be.visible');
    cy.url().should('equal', Cypress.config().baseUrl + '/login');
  });

  it(`should get validation errors when` +
      ` trying to login with invalid password`, () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('Password!' + `{Enter}`);
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!')
      .should('be.visible');
    cy.url().should('equal', Cypress.config().baseUrl + '/login');
  });
});
