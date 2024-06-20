/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });
  it('should be logged in user with valid data', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa-sign-in').click();
    cy.get('#flash.flash.success')
      .should('contain.text', 'You logged into a secure area!');
  });
  it('unsuccessful logged in with invalid username', () => {
    cy.get('#username').type('tratata');
    cy.get('#password').type(password);
    cy.get('.fa-sign-in').click();
    cy.get('#flash.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });
  it('unsuccessful logged in with invalid password', () => {
    cy.get('#username').type(username);
    cy.get('#password').type('jchwaWW$#');
    cy.get('.fa-sign-in').click();
    cy.get('#flash.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });
  it('should be logged out user', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa-sign-in').click();
    cy.get('#flash.flash.success')
      .should('contain.text', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash.flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
