/// <reference types="cypress" />

describe('Sign In page', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'


  beforeEach(() => {
    cy.visit ('/login');
    cy.url().should('include', '/login')
  });

  it('should provide an ability to log in with registered data', () => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.contains('.radius', 'Login').click()
    cy.get('#flash').should('exist')
      .should('contains.text', 'You logged into a secure area!')
    cy.url().should('include', '/secure')
  });

  it('should not provide an ability to log in with not registered username', () => {
   cy.get('#username').type(password + 'ab')
   cy.get('#password').type(password)
   cy.contains('.radius', 'Login').click()
   cy.get('#flash').should('exist')
     .should('contains.text', 'Your username is invalid')
  });

  it('should not provide an ability to log in with not correct password', () => {
    cy.get('#username').type(username)
    cy.get('#password').type(password + 'ac')
    cy.contains('.radius', 'Login').click()
    cy.get('#flash').should('exist')
      .should('contains.text', 'Your password is invalid')

  });

  it('should provide an ability to log out after clicking on the [Logout]', () => {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.contains('.radius', 'Login').click()
    cy.contains('.button', 'Logout').click();
    cy.get('#flash').should('exist')
      .should('contains.text', 'You logged out of the secure area!')
    cy.url().should('include', '/login')
  });
});

