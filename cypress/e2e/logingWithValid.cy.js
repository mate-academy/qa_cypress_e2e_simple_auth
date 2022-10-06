/// <reference types="cypress" />

const { user } = require ('../support/userobject')

describe('Login with valid creadentials', () => {

  it('Should be able to log in', () => {
    cy.visit('/login');

    cy.loginUser(user.username, user.password);
    
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });
});
