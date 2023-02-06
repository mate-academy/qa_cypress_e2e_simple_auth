/// <reference types="cypress" />
const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Should provide an ability to log in', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.get('button').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('Should not provide an ability to log in when username is not valid', () => {
    cy.get('#username').type('username');

    cy.get('#password').type(password);

    cy.get('button').click();

    cy.get('#flash').should('contain', 'Your username is invalid!');

  });

  it('Should not provide an ability to log in when password is not valid', () => {
    cy.get('#username').type(username);

    cy.get('#password').type('password');

    cy.get('button').click();

    cy.get('#flash').should('contain', 'Your password is invalid!');
  });

  it('Should provide an ability to log in and log out', () => {
    cy.get('#username').type(username);

    cy.get('#password').type(password);

    cy.get('button').click();

    cy.get('#flash').should('contain', 'You logged into a secure area!');

    cy.get('.button').contains('Logout').click();

    cy.url().should('contain', '/login');
  });
});
