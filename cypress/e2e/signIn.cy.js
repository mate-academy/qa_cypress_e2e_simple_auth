/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it(`should login user with valid userName and Password`, () => {
    cy.get(`input[id='username']`).type('tomsmith');

    cy.get(`input[id='password']`).type('SuperSecretPassword!');

    cy.get(`button[type='submit']`).click();

    cy.contains(`div[id='flash']`, 'You logged into a secure area!').should(
      'exist'
    );
  });

  it(`should return invalid userName for wrong userName`, () => {
    cy.get(`input[id='username']`).type('tom');

    cy.get(`input[id='password']`).type('SuperSecretPassword!');

    cy.get(`button[type='submit']`).click();

    cy.contains(`div[id='flash']`, 'Your username is invalid!').should('exist');
  });

  it(`should return invalid password for wrong password`, () => {
    cy.get(`input[id='username']`).type('tomsmith');

    cy.get(`input[id='password']`).type('Super');

    cy.get(`button[type='submit']`).click();

    cy.contains(`div[id='flash']`, 'Your password is invalid!').should('exist');
  });

  it(`should correctly logOut`, () => {
    cy.get(`input[id='username']`).type('tomsmith');

    cy.get(`input[id='password']`).type('SuperSecretPassword!');

    cy.get(`button[type='submit']`).click();

    cy.get(`a[href='/logout']`).click();

    cy.contains(`div[id='flash']`, 'You logged out of the secure area!').should(
      'exist'
    );
  });
});
