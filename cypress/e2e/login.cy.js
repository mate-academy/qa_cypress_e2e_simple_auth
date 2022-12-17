/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit("/login")
  });

  it('The user should be able to login with valid creds', () => {
    
    //To check that we are on the Sign In page
    cy.get('h2')
      .should("contain.text", "Login Page")

    cy.get('#username')
      .type("tomsmith")

    cy.get('#password')
      .type("SuperSecretPassword!")

    cy.contains('.radius', 'Login')
      .click()

    // To check that user is redirected
    cy.url()
      .should("include", "/secure")

    cy.get('#flash')
    .should("contain.text", "You logged into a secure area!")
  });
  
  it('The user should not be able to login with invalid creds', () => {
    
    //to check that we are on the Sign In page
    cy.get('h2')
      .should("contain.text", "Login Page")

    cy.get('#username')
      .type("Samara")

    cy.get('#password')
      .type("NotSuperSecretPassword!")

    cy.contains('.radius', 'Login')
      .click()

    cy.url()
      .should("include", "/login")

    cy.get('#flash')
    .should("contain.text", "Your username is invalid!")
  });
});
