/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  beforeEach(() => {
    cy.visit('/login');
  });

  afterEach(() => {
    cy.end();
  });

  it('should login with valid creds', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type=submit]').click();
    cy.get('div[class=\'flash success\']').should(
      'contain.text',
      'You logged into a secure area!'
    );
  });

  it('should not login with invalid creds', () => {
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');
    cy.get('button[type=submit]').click();
    cy.get('div[class=\'flash error\']').should(
      'contain.text',
      'Your username is invalid!'
    );
  });

  it.only('should logout from the app', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type=submit]').click();
    cy.get('a[href=\'/logout\']').click();
    cy.get('div[class=\'flash success\']').should(
      'contain.text',
      'You logged out of the secure area!'
    );
  });
});
