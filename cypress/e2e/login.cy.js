/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('login')
  });

it('User should be able to access the login page', () => {
  cy.url()
    .should('include', 'login');

  cy.get('div > h2')
    .should('contain', 'Login Page');
  
  cy.get('#login > div:first-child > div > label')
    .should('contain', 'Username');

  cy.get('#login > div:nth-child(2) > div > label')
    .should('contain', 'Password');
}); 

 it('User should successfully login with valid credits', () => {
    cy.get('#username')
      .should('exist')
      .type('tomsmith');
    
    cy.get('#password')
      .should('exist')
      .type('SuperSecretPassword!');

    cy.get('button').contains('Login')
      .click();
    
    cy.get('h4')
      .should('contain', 'Welcome');
    
    cy.get('#flash')
      .should('contain', 'secure area');

    cy.url()
      .should('include', 'secure');
  });

  it('Validation message should appear for login with invalid credentials', () => {
    cy.get('#username')
      .should('exist')
      .type('tomcooper');
    
    cy.get('#password')
      .should('exist')
      .type('SuperSecretPassword!');

    cy.get('button').contains('Login')
      .click();

    cy.get('div > #flash')
      .should('contain', 'username is invalid');

      cy.get('#username')
      .should('exist')
      .type('tomsmith');
    
    cy.get('#password')
      .should('exist')
      .type('notSoSecretPassword!');

    cy.get('button').contains('Login')
      .click();

    cy.get('div > #flash')
      .should('contain', 'password is invalid');

      cy.url()
        .should('include', 'login');
  });

  it('User should be able to logout from the app', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');

    cy.get('button').contains('Login')
      .click();

    cy.get('[href="/logout"]')
      .should('exist')
      .should('contain', 'Logout')
      .click();

    cy.url()
    .should('include', 'login');
  });
});
