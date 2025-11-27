/// <reference types="cypress" />

import chooseRandomFromArray from '../support/e2e';

describe('Sign In page', {
  viewportHeight: 1000,
  viewportWidth: 1400,
  scrollBehavior: 'bottom'
},
() => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';

  it('should provide an ability to log in', () => {
    cy.visit('/login');
    cy.get('#username').type(validUsername);
    cy.get('#password').type(validPassword);
    cy.get('button[type="submit"]').click();
    cy.location('href')
      .should('equal', 'https://the-internet.herokuapp.com/secure');
  });

  it(`should not allowed to log in when credential are ` +
    `inconsistent with requirements`, () => {
    const invalidUsername =
      chooseRandomFromArray(['boLekKolek32', 'Mini%43', 'mmmKuet*##']);
    const invalidPassword =
      chooseRandomFromArray(['brrrBUM!', 'kocccccs)99', 'HsdWWWDDPP']);

    cy.visit('/login');
    cy.get('#username')
      .type(invalidUsername);
    cy.get('#password')
      .type(invalidPassword);
    cy.get('button[type="submit"]')
      .click();
    cy.location('href')
      .should('equal', 'https://the-internet.herokuapp.com/login');
    cy.get('[class="flash error"]')
      .should('be.visible')
      .and('include.text', 'Your username is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.visit({
      method: 'POST',
      url: 'https://the-internet.herokuapp.com/authenticate',
      body: {
        username: validUsername,
        password: validPassword
      }
    });
    cy.get('[href*="/logout"]')
      .contains('Logout')
      .click();
    cy.location('href')
      .should('equal', 'https://the-internet.herokuapp.com/login');
  });
});
