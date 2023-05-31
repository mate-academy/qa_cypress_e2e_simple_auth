/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  const invalidUser = 'ivalidtomsmith';
  const invalidPassword = 'invalidPassword!';

  it('should allow to login with valid data', () => {

    cy.findById('username')
    .type(username);

    cy.findById('password')
    .type(password);

    cy.get('button.radius > .fa')
    .click();

    cy.findById('flash')
    .should('contain.text', 'You logged into a secure area!');

    cy.get('a.button > i.icon-2x')
    .click();

    cy.findById('flash')
    .should('contain.text', 'You logged out of the secure area!');
  });

  it('shouldn`t allow to login with invalid email',() => {

    cy.findById('username')
    .type(invalidUser);

    cy.findById('password')
    .type(password);

    cy.get('button.radius > .fa')
    .click();

    cy.findById('flash')
    .should('contain.text', 'Your username is invalid!');
  })

  it('shouldn`t allow to login with invalid password',() => {

    cy.findById('username')
    .type(username);

    cy.findById('password')
    .type(invalidPassword);

    cy.get('button.radius > .fa')
    .click();

    cy.findById('flash')
    .should('contain.text', 'Your password is invalid!');
  })
});
