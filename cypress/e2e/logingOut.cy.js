/// <reference types="cypress" />

const { user } = require ('../support/userobject')

describe('Flash message of loging out', () => {

  it('Loging out should provide an flash message', () => {
    cy.visit('/login');

    cy.loginUser(user.username, user.password);

    cy.get('[href="/logout"]').
      click();
    
    cy.get('#flash').
      should('contain.text', 'You logged out of the secure area!');
  });
});