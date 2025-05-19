/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should login user if data is valid', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.radius').click();

    cy.url().should('equal', 'https://the-internet.herokuapp.com/secure');
  });

  it('should reject login if userName are invalid', () => {
    cy.get('#username').type('Mykola');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.radius').click();

    cy.get('#flash')
      .should('exist')
      .should('contain.text', 'Your username is invalid!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
  });

  it('should reject login if password are invalid', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('1234');

    cy.get('.radius').click();

    cy.get('#flash')
      .should('exist')
      .should('contain.text', 'Your password is invalid!');
    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');
  });

  it('should provide the logout opportunity after login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.radius').click();

    cy.get('.icon-2x.icon-signout').should('exist').click();

    cy.url().should('equal', 'https://the-internet.herokuapp.com/login');

    cy.get('#flash')
      .should('exist')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
