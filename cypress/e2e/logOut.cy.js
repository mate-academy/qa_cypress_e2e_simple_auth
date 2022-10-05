/// <reference types="cypress" />

// const { contains } = require("cypress/types/jquery");
const { user } = require ('../support/constUser');
describe ('login with Login with valid creds', () => {
  before(() => {
    cy.visit('/login');
  })
  it('login', () => {
    cy.get('#username')
      .type(user.username)
      .get('#password')
      .type(user.password)
      .get('.fa').click();;
  });
  it('logout', () => {
    cy.get('.icon-2x')
      .click();
  });
  it('logout assertance', () => {
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
    
  });
});