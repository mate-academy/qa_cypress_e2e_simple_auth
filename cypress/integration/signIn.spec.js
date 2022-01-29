/// <reference types="cypress" />

describe('User should be able to', () => {
  let user;
  before(function () {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('login with registered credentials', () => {
    cy.get('#username').type('tomsmith').should('have.value', 'tomsmith');
    cy.get('#password').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.get('.button').click();
  });

  it('login with invalid credentials', () => {
    cy.get('#username').type('tom').should('have.value', 'tom');
    cy.get('#password').type('SuperSecret').should('have.value', 'SuperSecret');
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'Your username is invalid!');
  });


  it('logout from account', () => {
    cy.get('#username').type('tomsmith').should('have.value', 'tomsmith');
    cy.get('#password').type('SuperSecretPassword!').should('have.value', 'SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
})