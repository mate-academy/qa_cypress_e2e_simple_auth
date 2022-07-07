/// <reference types="cypress" />

describe('User should log in with valid data', () => {

it('User should see a message You logged into a secure area!, be secure page and have a link for logout', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'
  cy.visit('/login')
  cy.get('#username')
  .type(username)
  cy.get('#password')
  .type(password)

  cy.contains('button', 'Login')
  .click();

  cy.get('#flash')
  .should('contain.text', 'You logged into a secure area!')

  cy.loginUser()
  cy.assertPageUrl('/secure')
  cy.get('.button')
  .should('contain', 'Logout')
  
  });
});

describe('Login with invalid creds and check validation error', () => {
  it('User should see message Your username is invalid! or Your password is invalid!, when login with invalid username/password', () => {
    cy.loginUserInvalidName()

    cy.get('#flash')
    .should('contain.text', 'Your username is invalid!')

    cy.loginUserInvalidPassword()
    
    cy.get('#flash')
    .should('contain.text', 'Your password is invalid!')
  });  
});

describe('Logout from the app and assert you successfully logged out.', () => {
    beforeEach(()=>{ 
      cy.loginUser()
      cy.get('.button')
      .should('contain', 'Logout').click();
    });

  it('User should see a message You logged out of the secure area!, be login page, have a link for login', () => {
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  
    cy.assertPageUrl('/login')
  
    cy.get('button')
    .should('contain', 'Login')
    });
  });