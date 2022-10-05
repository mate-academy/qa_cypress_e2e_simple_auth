/// <reference types="cypress" />

// const { contains } = require("cypress/types/jquery");

describe ('login with Login with invalid creds', () => {

  before(() => {
    cy.visit('/login');
  })
  it('login invalid', () => {
    cy.get('#username')
      .type('usernamew33d')
      .get('#password')
      .type(`passwordferf35f`)
      .get('.fa').click();
  });
    it('alert should appear', () => {
      cy.get('#flash')
        .should('contain.text', ' Your username is invalid!');
    })
  });