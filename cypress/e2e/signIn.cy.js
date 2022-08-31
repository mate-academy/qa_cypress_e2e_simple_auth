/// <reference types="cypress" />

describe('Login, Login with invalid data, Logout', () => {
    const user = 'tomsmith';
    const password = 'SuperSecretPassword!';

  beforeEach(() => {
        cy.visit('/');
    })

    it('Should check: login successful', () => {
        cy.get('[name="username"]')
          .type(user);

        cy.get('[name="password"]')
          .type(password);

        cy.get('[class="fa fa-2x fa-sign-in"]')
          .click();

        cy.get('[id="flash"]')
          .contains('You logged into a secure area!');
    });

    it('Should check: not login with invalid username', () => {
        cy.get('[name="username"]')
          .type('invalid username');

        cy.get('[name="password"]')
          .type(password);

        cy.get('[class="fa fa-2x fa-sign-in"]')
          .click();

        cy.get('[id="flash"]')
          .contains('Your username is invalid!');
    });

    it('Should check: not login with invalid password', () => {
      cy.get('[name="username"]')
        .type(user);

      cy.get('[name="password"]')
        .type('invalid password');

      cy.get('[class="fa fa-2x fa-sign-in"]')
        .click();

      cy.get('[id="flash"]')
        .contains('Your password is invalid!');
  });

    it('Should check: logout successful', () => {
        cy.get('[name="username"]')
          .type(user);

        cy.get('[name="password"]')
          .type(password);

        cy.get('[class="fa fa-2x fa-sign-in"]')
          .click();

        cy.get('[class="icon-2x icon-signout"]')
          .click();

        cy.get('[id="flash"]')
          .contains('You logged out of the secure area!');
    });
  });
