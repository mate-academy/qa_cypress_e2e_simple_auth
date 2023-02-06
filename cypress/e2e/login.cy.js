/// <reference types="cypress" />

import { exists } from "fs";

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Succesfull login', () => {
    cy.get('[name="username"]')
    .type('tomsmith')

    cy.get('[name="password"]')
    .type('SuperSecretPassword!')

    cy.get('[class="fa fa-2x fa-sign-in"]')
    .click()

    cy.contains('You logged into a secure area!')
    .should('be.visible') 

  });

  it('Login with invalid creds', () => {
    cy.get('[name="username"]')
    .type('tomsmith33')

    cy.get('[name="password"]')
    .type('SuperSecretPassword!23')

    cy.get('[class="fa fa-2x fa-sign-in"]')
    .click()

    cy.contains('Your username is invalid!')
    .should('be.visible') 

  });

  it('Logout', () => {

    cy.get('[name="username"]')
    .type('tomsmith')

    cy.get('[name="password"]')
    .type('SuperSecretPassword!')

    cy.get('[class="fa fa-2x fa-sign-in"]')
    .click()

    cy.get('[class="icon-2x icon-signout"]')
    .click()

    cy.contains('You logged out of the secure area!')
    .should('be.visible') 

  });

});