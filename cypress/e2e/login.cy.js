/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should login user with registered credentials', () => {
    const { username, password } = generateUser();

    //fill in the fields
    cy.get('[id="username"]')
      .type(username);

    cy.get('[id="password"]')
      .type(password);

    //click on the button
    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    //check the result
    cy.url()
      .should('include', 'secure');
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it(`shouldn't login user with unregistered username`, () => {
    const { username, password } = generateUser();

    //fill in the fields
    cy.get('[id="username"]')
      .type(username + '098');

    cy.get('[id="password"]')
      .type(password);

    //click on the button
    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    //check the result
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
  });

  it(`shouldn't login user with unregistered password`, () => {
    const { username, password } = generateUser();

    //fill in the fields
    cy.get('[id="username"]')
      .type(username);

    cy.get('[id="password"]')
      .type(password + '098');

    //click on the button
    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    //check the result
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!')
  });

  it('should login user with registered credentials and log out', () => {
    const { username, password } = generateUser();

    //fill in the fields
    cy.get('[id="username"]')
      .type(username);

    cy.get('[id="password"]')
      .type(password);

    //click on the button
    cy.get('.radius')
      .should('contain.text', 'Login')
      .click();

    //check the result
    cy.url()
      .should('include', 'secure');
    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!');

    //click on the button
    cy.get('[href="/logout"]')
      .should('contain.text', 'Logout')
      .click();

    //check the result
      cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!');
  });
});
