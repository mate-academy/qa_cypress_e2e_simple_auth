/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should not proceed with invalid username', () => {
    cy.get(`input[name='username']`)
      .should('exist')
      .type('InvalidUsername');

    cy.get(`input[name='password']`)
      .should('exist')
      .type('InvalidPassword');

    cy.get(`button[type='submit']`)
      .should('exist')
      .click();

    cy.get(`div[id='flash']`)
      .should('include.text', 'Your username is invalid!');
  });

  it('should not proceed with invalid password', () => {
    cy.get(`input[name='username']`)
      .should('exist')
      .type('tomsmith');

    cy.get(`input[name='password']`)
      .should('exist')
      .type('InvalidPassword');

    cy.get(`button[type='submit']`)
      .should('exist')
      .click();

    cy.get(`div[id='flash']`)
      .should('include.text', 'Your password is invalid!');
  });

  it('should proceed with valid username && password', () => {
    cy.get(`input[name='username']`)
      .should('exist')
      .type('tomsmith');

    cy.get(`input[name='password']`)
      .should('exist')
      .type('SuperSecretPassword!');

    cy.get(`button[type='submit']`)
      .should('exist')
      .click();

    cy.get(`div[id='flash']`)
      .should('include.text', 'You logged into a secure area!');
  });

  it('should let user logout', () => {
    cy.get(`input[name='username']`)
      .type('tomsmith');

    cy.get(`input[name='password']`)
      .type('SuperSecretPassword!');

    cy.get(`button[type='submit']`)
      .click();

    cy.get(`a[href='/logout']`)
      .should('exist')
      .click();

    cy.get(`div[id='flash']`)
      .should('include.text', 'You logged out of the secure area!');
  });
});
