/// <reference types="cypress" />

describe('Login', () => {
  const random = Math.floor(Math.random(1000) * 1000);
  const userName = 'tomsmith' + random;
  const password = 'SuperSecretPassword!' + random;

  it('Successful login', () => {
    cy.visit('/login');
    cy.get('[name="username"]')
      .type('tomsmith');
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.get('[class="fa fa-2x fa-sign-in"]')
      .click();
    cy.get('.flash.success')
      .should('contain', ' You logged into a secure area!');
    cy.url().should('contain', '/secure');
  });
  
  it('Successfully logged out', () => {
    cy.get('[class="icon-2x icon-signout"]')
    .click();
    cy.get('.flash.success')
      .should('contain', 'You logged out of the secure area!');
    cy.url().should('contain', '/login');
  });

  it('Login with invalid username', () => {
    cy.visit('/login');
    cy.get('[name="username"]')
    .type(userName);
  cy.get('#password')
    .type('SuperSecretPassword!');
  cy.get('[class="fa fa-2x fa-sign-in"]')
    .click();
  cy.get('.flash.error')
    .should('contain', 'Your username is invalid!');
  cy.url().should('contain', '/login');
});

it('Login with invalid password', () => {
  cy.visit('/login');
  cy.get('[name="username"]')
  .type('tomsmith');
cy.get('#password')
  .type(password);
cy.get('[class="fa fa-2x fa-sign-in"]')
  .click();
cy.get('.flash.error')
  .should('contain', 'Your password is invalid!');
cy.url().should('contain', '/login');
});
});