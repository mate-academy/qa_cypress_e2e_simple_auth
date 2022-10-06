/// <reference types="cypress" />

const { user } = require ('../support/userobject')

describe('Login with invalid creadentials', () => {

  it('Should not log in user with wrong username', () => {
    cy.visit('/login');

    cy.loginUser('XtomsmithX', user.password)

    cy.get('#flash').
      should('contain.text', 'Your username is invalid!');
  });

  it('Should not log in user with wrong password', () => {
    cy.visit('/login');

    cy.loginUser(user.username, '123SuperSecretPassword!');

    cy.get('#flash').
      should('contain.text', 'Your password is invalid!');
  });
});