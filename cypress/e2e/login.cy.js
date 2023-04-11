/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  });

  it('should provide an ability to log in', () => {
    cy.findById('username')
      .type('tomsmith');

    cy.findById('password')  
      .type('SuperSecretPassword!');

    cy.clickButton(' Login');

    cy.assertMessage('You logged into a secure area!');  
  });

  it('should not allow to login with invalid username', () => {
    cy.findById('username')
      .type('invalid username');

    cy.findById('password')  
      .type('SuperSecretPassword!');

    cy.clickButton(' Login');

    cy.assertMessage('Your username is invalid!');
  });

  it('should not allow to login with invalid password', () => {
    cy.findById('username')
      .type('tomsmith');

    cy.findById('password')
      .type('invalid password');

    cy.clickButton(' Login');

    cy.assertMessage('Your password is invalid!');
  });

  it('should provide an ability to log out', () => {
    cy.findById('username')
      .type('tomsmith');

    cy.findById('password')  
      .type('SuperSecretPassword!');

    cy.clickButton(' Login');

    cy.clickButton(' Logout');

    cy.assertMessage('You logged out of the secure area!');
  });
});
