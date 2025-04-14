/// <reference types="cypress" />

const { ValidationErrorItemType } = require("sequelize");

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide the ability to login', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();

    cy.get('#flash.flash.success')
      .should('have.text', 'You logged into a secure area!')
  });

  it('should provide validation errors after login with invali username', () => {
    cy.get('#username')
      .type('tomsmit');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();

    cy.get('#flash', ValidationErrorItemType)
      .should('have.text', 'Your username is invalid!')
  })

  it('should resieve validation errors after login with invali password', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPasswor!');
    cy.get('.fa')
      .click();

    cy.get('#flash', ValidationErrorItemType)
      .should('have.text', 'Your password is invalid!')
  })

  it('should resieve the ability to logout', () => {
    cy.get('#username')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('.fa')
      .click();
    
    cy.get('.icon-2x')
      .click();

    cy.get('#flash.flash.success')
      .should('have.text', 'You logged out of the secure area!')
  })
});
