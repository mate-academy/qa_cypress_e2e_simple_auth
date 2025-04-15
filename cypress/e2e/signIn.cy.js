/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should login with valid creds', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.contains('#flash', 'You logged into a secure area!');
  });

  it('Shouldn\'t login with invalid username', () => {
    const password = 'SuperSecretPassword!';

    cy.get('#username').type('invalidUsername');
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.contains('#flash', 'Your username is invalid!');
  });


  it('Shouldn\'t login with invalid password', () => {
    const username = 'tomsmith';

    cy.get('#username').type(username);
    cy.get('#password').type('invalidPassword');
    cy.get('[type="submit"]').click();
    cy.contains('#flash', 'Your password is invalid!');
  });

  it('Should logout from the app', () => {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
    cy.contains('#flash', 'You logged into a secure area!');

    cy.get('[class="button secondary radius"]').click();
    cy.contains('#flash', 'You logged out of the secure area!');
  });
});
