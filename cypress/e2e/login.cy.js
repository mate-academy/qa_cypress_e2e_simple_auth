/// <reference types="cypress" />

describe('Login page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!'

  beforeEach(() => {
    cy.visit('/login');
  });

  it('Login with valid creds', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('button[type="submit"]')
      .click();
    
    //assert you successfully logged in
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it('Login with invalid username', () => {
    cy.get('#username')
      .type(`${username}_invalid`);

    cy.get('#password')
      .type(password);

    cy.get('button[type="submit"]')
      .click();

    //assert validation error with invalid username
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it('Login with invalid password', () => {
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(`${password}_invalid`);

    cy.get('button[type="submit"]')
      .click();

    //assert validation error with invalid password
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it('Logout from the app', () => {
    //logged in
    cy.get('#username')
      .type(username);

    cy.get('#password')
      .type(password);

    cy.get('button[type="submit"]')
      .click();

    //logged out
    cy.get('a.button[href="/logout"]')
      .click();
    
    //assert you successfully logged out
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
