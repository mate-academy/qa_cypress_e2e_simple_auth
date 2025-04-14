/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should loggin with valid credits', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('.fa')
      .click();
    cy.get('h2')
      .should('contain', ' Secure Area');
  });

  it('shouldn\'t loggin with invalid username', () => {
    cy.get('#username')
      .type(`${username}1`);
    cy.get('#password')
      .type(password);
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your username is invalid');
  });

  it('shouldn\'t loggin with invalid password', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(`${password}1`);
    cy.get('.fa')
      .click();
    cy.get('#flash')
      .should('contain', 'Your password is invalid');
  });

  it('should succesfully logged out', () => {
    cy.get('#username')
      .type(username);
    cy.get('#password')
      .type(password);
    cy.get('.fa')
      .click();
    cy.get('.icon-2x')
      .click();
    cy.get('#flash')
      .should('contain', 'You logged out of the secure area!');
  });
});
