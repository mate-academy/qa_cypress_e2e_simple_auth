/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should provide the ability to log in with valid creds', () => {
    cy.get('[id="username"]')
      .type('tomsmith');
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');
    cy.get('.fa.fa-2x.fa-sign-in')
      .click();
    cy.get('.flash.success')
      .should('contain', 'You logged into a secure area!');
  });

  it('Should not allow logging in with an invalid password', () => {
    cy.get('[id="username"]')
      .type('tomsmith');
    cy.get('[id="password"]')
      .type('WrongPassword');
    cy.get('.fa.fa-2x.fa-sign-in')
      .click();
    cy.get('.flash.error')
      .should('contain', 'Your password is invalid!');
  });

  it('Should not allow logging in with an invalid username', () => {
    cy.get('[id="username"]')
      .type('wrongusername');
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');
    cy.get('.fa.fa-2x.fa-sign-in')
      .click();
    cy.get('.flash.error')
      .should('contain', 'Your username is invalid!');
  });

  it('Should provide the ability to log out', () => {
    cy.get('[id="username"]')
      .type('tomsmith');
    cy.get('[id="password"]')
      .type('SuperSecretPassword!');
    cy.get('.fa.fa-2x.fa-sign-in')
      .click();
    cy.get('.icon-2x.icon-signout')
      .click();
    cy.get('.flash.success')
      .should('contain', 'You logged out of the secure area!');
  });
});
