/// <reference types="cypress" />

describe('Login page', () => {
  // beforeEach(() => {
  //   cy.visit ('https://the-internet.herokuapp.com/login')
  // });
const username = 'tomsmith';
const password = 'SuperSecretPassword!';

const incorrectUsername = 'tomsmiht';
const incorrectPassword = 'SuperSecretPassword1';


  it('should allow login', () => {
    cy.visit ('https://the-internet.herokuapp.com/login')
      .get ('h2')
      .should('contain.text', 'Login Page')

    cy.get('[name="username"]')
      .type(username)

    cy.get('[name="password"]')
      .type(password)

    cy.get('[type="submit"]')
      .click()

    cy.get('h4.subheader')
      .contains('Welcome to the Secure Area. When you are done click logout below.')
  });

  it('should allow logout', () => {
    cy.visit ('https://the-internet.herokuapp.com/login')
      .get ('h2')
      .should('contain.text', 'Login Page')

    cy.get('[name="username"]')
      .type(username)

    cy.get('[name="password"]')
      .type(password)

    cy.get('[type="submit"]')
      .click()

    cy.get('h4.subheader')
      .contains('Welcome to the Secure Area. When you are done click logout below.')

      cy.get('.button')
      .click()

      cy.get('#flash')
      .contains('You logged out of the secure area!')

  });

  it('should not allow login with incorrect username', () => {
    cy.visit ('https://the-internet.herokuapp.com/login')
      .get ('h2')
      .should('contain.text', 'Login Page')

    cy.get('[name="username"]')
      .type(incorrectUsername)

    cy.get('[name="password"]')
      .type(password)

    cy.get('[type="submit"]')
      .click()

      cy.get('#flash')
      .contains('Your username is invalid!')
  });

  it('should not allow login with incorrect password', () => {
    cy.visit ('https://the-internet.herokuapp.com/login')
      .get ('h2')
      .should('contain.text', 'Login Page')

    cy.get('[name="username"]')
      .type(username)

    cy.get('[name="password"]')
      .type(incorrectPassword)

    cy.get('[type="submit"]')
      .click()

      cy.get('#flash')
      .contains('Your password is invalid!')
  });

});
