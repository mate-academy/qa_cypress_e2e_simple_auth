/// <reference types = "cypress" />
import { faker } from '@faker-js/faker';
describe('Login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it(`should contains main parts Login page`, () => {
    cy.get('h2')
      .should('contain.text', 'Login Page');

    cy.get('#username')
      .should('exist');

    cy.get('#password')
      .should('exist');

    cy.contains('button', 'Login').should('exist');
  });

  it(`should allow to login with valid creds`, () => {
    const validUsername = 'tomsmith';
    const validPassword = 'SuperSecretPassword!'
    cy.findById('username')
      .type(validUsername);

    cy.findById('password')
      .type(validPassword);

    cy.contains('button', 'Login')
      .should('exist')
      .click();

    cy.findById('flash')
      .should('contain.text', 'You logged into a secure area!');
  });

  it(`shouldn't allow to login with empty fiels`, () => {
    cy.findById('username')
      .should('exist');

    cy.findById('password')
      .should('exist');

    cy.contains('button', 'Login')
      .should('exist')
      .click();

    cy.findById('flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it(`shouldn't allow to login with invalid creds`, () => {
    const invalidUsername = faker.internet.userName();
    const invalidPassword = faker.internet.password();
    cy.findById('username')
      .type(invalidUsername);

    cy.findById('password')
      .type(invalidPassword);

    cy.contains('button', 'Login')
      .should('exist')
      .click();

    cy.findById('flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it(`shouldn't allow to login with valid username
    and invalid password`, () => {
    const validUsername = 'tomsmith';
    const validPassword = 'SuperSecretPassword!'
    const invalidUsername = faker.internet.userName();
    const invalidPassword = faker.internet.password();
    cy.findById('username')
      .type(validUsername);

    cy.findById('password')
      .type(invalidPassword);

    cy.contains('button', 'Login')
      .should('exist')
      .click();

    cy.findById('flash')
      .should('contain.text', 'Your password is invalid!');
  });

  it(`shouldn't allow to login with valid password
    and invalid username`, () => {
    const validUsername = 'tomsmith';
    const validPassword = 'SuperSecretPassword!'
    const invalidUsername = faker.internet.userName();
    const invalidPassword = faker.internet.password();
    cy.findById('username')
      .type(invalidUsername);

    cy.findById('password')
      .type(validPassword);

    cy.contains('button', 'Login')
      .should('exist')
      .click();

    cy.findById('flash')
      .should('contain.text', 'Your username is invalid!');
  });

  it(`should allow to logout from the app`, () => {
    const validUsername = 'tomsmith';
    const validPassword = 'SuperSecretPassword!'
    cy.findById('username')
      .type(validUsername);

    cy.findById('password')
      .type(validPassword);

    cy.contains('button', 'Login')
      .should('exist')
      .click();

    cy.contains('a', 'Logout')
      .should('exist')
      .click();

    cy.findById('flash')
      .should('contain.text', 'You logged out of the secure area!');

  });
});
