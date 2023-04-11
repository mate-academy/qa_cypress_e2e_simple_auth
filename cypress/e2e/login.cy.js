/// <reference types="cypress" />

describe('Login page', () => {
  const username = "tomsmith";
  const password = "SuperSecretPassword!";

  beforeEach(() => {
  cy.visit("https://the-internet.herokuapp.com/login")
  });

  it('it should allow user to log in', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.get('.fa').should('contain.text', 'Login').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('should not allow to log in with invalid username', () => {
    cy.get('#username').type("invalidUserName");

    cy.get('#password').type(password);

    cy.get('.fa').should('contain.text', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('should not allow to log in with invalid password', () => {
    cy.get('#username').type(username);

    cy.get('#password').type("invalidPassword");

    cy.get('.fa').should('contain.text', 'Login').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  it('should allow to log out a user', () => {
    cy.get('#username').type('tomsmith')

    cy.get('#password').type('SuperSecretPassword!')
    
    cy.get('.fa').should('contain.text', 'Login').click()

    cy.get('#flash').should('contain.text', 'You logged into a secure area!')

    cy.get('.button').should('contain.text', 'Logout').click()

    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  })
});
