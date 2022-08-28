/// <reference types="cypress" />

describe('Login, Login with invalid data, Logout', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login#');
    })
    it('Should check: login successful', () => {
        cy.get('[name="username"]')
          .type('tomsmith');

        cy.get('[name="password"]')
          .type('SuperSecretPassword!');

        cy.get('[class="fa fa-2x fa-sign-in"]')
          .click();

        cy.get('[id="flash"]')
          .contains('You logged into a secure area!');
    });

    it('Should check: not login with invalid data', () => {
        cy.get('[name="username"]')
          .type('tom');

        cy.get('[name="password"]')
          .type('Password');

        cy.get('[class="fa fa-2x fa-sign-in"]')
          .click();

        cy.get('[id="flash"]')
          .contains('Your username is invalid!');
    });

    it('Should check: logout successful', () => {
        cy.get('[name="username"]')
          .type('tomsmith');

        cy.get('[name="password"]')
          .type('SuperSecretPassword!');

        cy.get('[class="fa fa-2x fa-sign-in"]')
          .click();

        cy.get('[class="icon-2x icon-signout"]')
          .click();

        cy.get('[id="flash"]')
          .contains('You logged out of the secure area!');
    });
  });
