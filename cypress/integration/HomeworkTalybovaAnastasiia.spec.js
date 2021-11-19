describe('User needs to', () => {
  it('Login with valid creds', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.get('.flash.success').contains('You logged into a secure area!').should('exist');
  })

  it('Login with invalid creds (username)', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('Tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.get('.flash.error').contains('Your username is invalid!').should('exist');
  })

  it('Login with invalid creds (password)', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SecretPassword!');
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.get('.flash.error').contains('Your password is invalid!').should('exist');
  })

  it('Logout from app and assert you successfully logged out', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[name="username"]').type('tomsmith');
    cy.get('[name="password"]').type('SuperSecretPassword!');
    cy.get('.fa.fa-2x.fa-sign-in').click();
    cy.get('.flash.success').contains('You logged into a secure area!').should('exist');
    cy.get('.icon-2x.icon-signout').click();
    cy.get('[id="flash"]').contains('You logged out of the secure area!').should('exist');
  })
})