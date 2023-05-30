/// <reference types= image.png"cypress" />

describe('Login page', () => {
  beforeEach(() => {

  });

  it('', () => {

  });
const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign in:', () => {
  beforeEach(() =>{
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get ('h2')
      .should('contain.text', 'Login Page')
  })

  it('1. Sign in with valid creds', () => {
    cy.login(username, password)

    cy.get('#flash')
      .should('contain.text', 'You logged into a secure area!')
  })

  it('2. Sign in with invalid username', () => {
    cy.login('thomassmith', password)
    cy.get('#flash')
      .should('contain.text', 'Your username is invalid!')
  })

  it('3. Sign in with invalid password', () => {
    cy.login(username, 'Thomassmith123')
    cy.get('#flash')
      .should('contain.text', 'Your password is invalid!')
  })


  it('4. Logout and confirm', () => {
    cy.login(username, password)
    cy.get('.button').click()
    cy.get('#flash')
      .should('contain.text', 'You logged out of the secure area!')
  })
});

});