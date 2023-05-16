/// <reference types="cypress" />

describe('Login page', () => {
  const validUsername = 'tomsmith'
  const validPassword = 'SuperSecretPassword!'
  const invalidUsername = 'fjgjfjs'
  const invalidPassword = 'Ghdhe4Saa'
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('should be able to log in with correct username and password', () => {
    cy.login(validUsername, validPassword);
    cy.get('div[data-alert]')
      .should('be.visible')
      .should('have.class', 'success')
      .and('contain', 'You logged into a secure area!')
  });

  it('should be able to log out', () => {
    cy.login(validUsername, validPassword)
    cy.contains('Logout').click()
    cy.get('div[data-alert]')
      .should('be.visible')
      .should('have.class', 'success')
      .and('contain', 'You logged out of the secure area!')
    
  });

  it('shold NOT be able to log in with invalid password', () => {
    cy.login(validUsername, invalidPassword)
    cy.get('div[data-alert]')
    .should('be.visible')
    .should('have.class', 'error')
    .and('contain', 'Your password is invalid!')

  });

  it('shold NOT be able to log in with invalid username', () => {
    cy.login(invalidUsername, validPassword)
    cy.get('div[data-alert]')
    .should('be.visible')
    .should('have.class', 'error')
    .and('contain', 'Your username is invalid!')
  });
});
