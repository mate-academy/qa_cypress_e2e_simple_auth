/// <reference types="cypress" />

describe('Sign in page', ()=> {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it.only('should provide an ability to login with registered data', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword!');
    
    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain.text', 'You logged into a secure area');
  })

  it.only('should not provide ability to login with invalid data', () => {
    cy.get('#username')
    .type('new_user890');

    cy.get('#password')
    .type('FakePasswordForNewUser');

    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain.text', 'Your username is invalid!');
  })

  it.only('should provide an ability to logout from the app', () => {
    cy.get('#username')
    .type('tomsmith');

    cy.get('#password')
    .type('SuperSecretPassword!');
    
    cy.get('.radius')
    .click();

    cy.get('#flash')
    .should('contain.text', 'You logged into a secure area');

    cy.get('[href="/logout"]')
    .click();

    cy.get('#flash')
    .should('contain.text', 'You logged out of the secure area!');
  })
})

    /*cy.get(':nth-child(2) > .nav-link')
    .click();

    cy.get(':nth-child(1) > .form-control')
    .type('tyui90@gmail.com');

    cy.get(':nth-child(2) > .form-control')
    .type('123456789testing')

    cy.get('.btn')
    .click();

    cy.get(':nth-child(4) > .nav-link')
    .should('contain.text', 'tyuio_user');
  })
})*/

