/// <reference types="cypress" />


describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('/login')
});

  it('testing home page', () => {
    cy.visit('/')
    cy.get('[class="heading"]')
      .should('contain.text', 'Welcome to the-internet')
});

  it('testing login page', () => {
    cy.contains('[class="radius"]', 'Login')
    cy.get('[class="large-6 small-12 columns"]')
      .should('contain.text', 'Username')
    cy.get('[class="large-6 small-12 columns"]')
      .should('contain.text', 'Password')
});

  it('testing succesfull login', ()=> {
    cy.get('[type="text"]')
      .type('tomsmith')
    cy.get('[type="Password"]')
      .type('SuperSecretPassword!')
    cy.get('[type="submit"]')
      .click()
    cy.get('[class="flash success"]')
      .should('contain.text', 'You logged into a secure area!')
    cy.get('[href="/logout"]')
      .click()
    cy.get('[class="flash success"]')
      .should('contain.text', 'You logged out of the secure area!')
});

  it('testing login with invalid data', ()=> {
    const randInt = Math.random().toString().slice(2)
    const invUsername = `userinvalidxd${randInt}`

    cy.get('[type="text"]')
      .type(invUsername)
    cy.get('[type="Password"]')
      .type(`userpassword${randInt}`)
    cy.get('[type="submit"]')
      .click()
    cy.get('[class="flash error"]')
      .should('contain.text', 'is invalid!')
});
 
});
