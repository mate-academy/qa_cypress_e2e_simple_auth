///<reference types="cypress" />
describe('Visit "Login Page"', () => {
  beforeEach(() => {

      cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('Login with valid creds (tomsmith/SuperSecretPassword!)', () => {
      cy.get('[id="username"]')
          .type('tomsmith')
      cy.get('[id="password"]')
          .type('SuperSecretPassword!')
      cy.contains('.radius', 'Login')
          .click()
      cy.get('.flash')
          .should('contain', 'You logged into a secure area!')
      cy.get('[href="/logout"]')
          .click()
  });
  it('Login with invalid creds (invalid Username)', () => {
      cy.get('[id="username"]')
          .type('anna')
      cy.get('[id="password"]')
          .type('SuperSecretPassword!')
      cy.contains('.radius', 'Login')
          .click()
      cy.get('.flash')
          .should('contain', 'Your username is invalid!')
  });

  it('Login with invalid creds ( invalid Password)', () => {
      cy.get('[id="username"]')
          .type('tomsmith')
      cy.get('[id="password"]')
          .type('1234!')
      cy.contains('.radius', 'Login')
          .click()
      cy.get('.flash')
          .should('contain', 'Your password is invalid!')
  });

  it('Logout from the app', () => {
      cy.get('[id="username"]')
          .type('tomsmith')
      cy.get('[id="password"]')
          .type('SuperSecretPassword!')
      cy.contains('.radius', 'Login')
          .click()
      cy.get('[href="/logout"]')
          .click()
      cy.get('.flash')
          .should('contain', 'You logged out of the secure area!')
  })
});
