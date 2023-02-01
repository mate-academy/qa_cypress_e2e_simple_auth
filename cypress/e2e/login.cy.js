/// <reference types="cypress" />

describe('Login page', () => {
  const name = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('successuful login with valid creds', () => {
    cy.get('#username').type(name);
    cy.get('#password').type(password);

    cy.get('.radius').click();
    
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('unsuccessful login with invalid creds', () => {
    cy.get('#username').type('invalid Username');
    cy.get('#password').type('invalid Password');

    cy.get('.radius').click();
    
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });

  it('successful logout from the app', () => {
    cy.get('#username').type(name);
    cy.get('#password').type(password);

    cy.get('.radius').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');

  });
});
