/// <reference types="cypress" />

// const { contains } = require("cypress/types/jquery");

describe ('login with Login with invalid creds', () => {

  before(() => {
    cy.visit('/login');
  })
  it('login invalid', () => {
    cy.get('[id="username"]')
      .type('usernamew33d')
      .get('[id="password"]')
      .type(`passwordferf35f`)
      .get('.fa').click();
  });
    it('alert should appear', () => {
      cy.get('[id=flash]')
        .should('contain.text', ' Your username is invalid!');
    })
  });