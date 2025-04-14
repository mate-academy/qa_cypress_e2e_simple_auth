/// <reference types="cypress" />

describe('Sign in page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should provide an ability to login with registered data', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword!');
  
    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain.text', 'You logged into a secure area');
  })

  it('should provide valid. error after login with invalid password', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('FakePasswordForNewUser');

    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain.text', 'Your password is invalid!');
  })

  it('should provide valid. error after login with invalid username', () => {
    cy.get('#username')
    .type('new_user890');

    cy.get('#password')
    .type('SuperSecretPassword!');

    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain.text', 'Your username is invalid!');
  })

  it('should provide an ability to logout from the app', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword!');
    
    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain.text', 'You logged into a secure area');

    cy.get('[href="/logout"]')
    .click();

    cy.get('#flash')
    .should('contain.text', 'You logged out of the secure area!');
  });
});


