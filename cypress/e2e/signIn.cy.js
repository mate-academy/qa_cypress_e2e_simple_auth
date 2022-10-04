/// <reference types="cypress" />

describe('Sign in', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('user is able to login with valid credentials', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');

    cy.get('.fa-sign-in').click();

    cy.get('[id="flash"]').should('contain.text', 'You logged into a secure area!');
  });

  it('should throw an error when login with invalid username', () => {
    cy.get('[id="username"]').type('tomsmith' + Math.round(Math.random(1000)*1000));
    cy.get('[id="password"]').type('SuperSecretPassword!');

    cy.get('.fa-sign-in').click();

    cy.get('[id="flash"]').should('contain.text', 'Your username is invalid!');
  });

  it('should throw an error when login with empty username', () => {
    cy.get('[id="password"]').type('SuperSecretPassword!');

    cy.get('.fa-sign-in').click();

    cy.get('[id="flash"]').should('contain.text', 'Your username is invalid!');
  });

  it('should throw an error when login with invalid password', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword' + Math.round(Math.random(1000)*1000));

    cy.get('.fa-sign-in').click();

    cy.get('[id="flash"]').should('contain.text', 'Your password is invalid!');
  });

  it('should throw an error when login with empty password', () => {
    const user = {username:'tomsmith',password:'SuperSecretPassword!'};
    cy.get('[id="username"]').type(user.username);

    cy.get('.fa-sign-in').click();

    cy.get('[id="flash"]').should('contain.text', 'Your password is invalid!');
  });

  it('user is able to logout', () => {
    cy.get('[id="username"]').type('tomsmith');
    cy.get('[id="password"]').type('SuperSecretPassword!');

    cy.get('.fa-sign-in').click();

    cy.get('.button').click();

    cy.get('[id="flash"]').should('contain.text', 'You logged out of the secure area!');
  });
});