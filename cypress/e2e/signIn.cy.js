/// <reference types="cypress" />

describe('Login with valid creds', () => {
  it('User should log in with valid data and see a message "You logged into a secure area!"', () => {
  const username = 'tomsmith'
  const password = 'SuperSecretPassword!'
  cy.visit('/login')
  cy.get('#username')
    .type(username)
  cy.get('#password')
    .type(password)

   cy.contains('button', 'Login')
   .click();
   cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  });
  
  it('User should be secure page', () => {
    cy.loginUser()
   cy.assertPageUrl('/secure')
  
  });
  it('User should have a link for logout', () => {
    cy.loginUser()
    cy.get('.button')
    .should('contain', 'Logout')
  
  });
});

describe('Login with invalid creds and check validation error', () => {
  it('User should see message Your username is invalid!, when login with invalid username', () => {
    cy.loginUserInvalidName()
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  });  
  
  it('User should see message Your password is invalid!, when login with invalid username', () => {
    cy.loginUserInvalidPassword()
    cy.get('#flash').should('contain.text', 'Your password is invalid!')
  });  
});

describe('Logout from the app and assert you successfully logged out.', () => {
    beforeEach(()=>{ 
      cy.loginUser()
      cy.get('.button')
      .should('contain', 'Logout').click();
    });

    it('User should see a message You logged out of the secure area!', () => {
      cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
  
    });
    
    it('User should be login page', () => {
     cy.assertPageUrl('/login')
    });

    it('User should have a link for login', () => {
      cy.get('button')
      .should('contain', 'Login')
    });
  });
