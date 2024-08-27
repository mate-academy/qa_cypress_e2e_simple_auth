/// <reference types="cypress" />

describe('Sign In page', () => {
  const user = 'tomsmith';
  const passw = 'SuperSecretPassword!';
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Login with valid credentials', () => {
    cy.get('#username').type(user);
    cy.get('#password').type(passw);
    cy.get('.fa').click();
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('unsuccessful logged in with invalid username', () => {
    cy.get('#username').type('aabcd21');
    cy.get('#password').type(passw);
    cy.get('.fa-sign-in').click();
    cy.get('#flash.flash.error')
      .should('contain.text', 'Your username is invalid!');
  });

  it('unsuccessful logged in with invalid password', () => {
    cy.get('#username').type(user);
    cy.get('#password').type('myp!@#');
    cy.get('.fa-sign-in').click();
    cy.get('#flash.flash.error')
      .should('contain.text', 'Your password is invalid!');
  });

  it('Logout from the app', () => {
    cy.get('#username').type(user);
    cy.get('#password').type(passw);
    cy.get('.fa-sign-in').click();
    cy.get('#flash.flash.success')
      .should('contain.text', 'You logged into a secure area!');
    cy.get('.button').click();
    cy.get('#flash.flash.success')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
