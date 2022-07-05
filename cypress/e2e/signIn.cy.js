/// <reference types="cypress" />
describe ('User', () =>{
  beforeEach ( () =>{
    cy.visit('http://the-internet.herokuapp.com/login');
  });
  it('should be able to login with valid data', () =>{
    
    cy.get('#username')
      .type(`tomsmith`);
    cy.get('#password')
      .type('SuperSecretPassword!');
    cy.contains('button', 'Login')
      .click();
    cy.get('div#flash.flash.success')
      .should('contain','You logged into a secure area!' );
    cy.contains('.button', 'Logout')
      .click();
    cy.get('div#flash.flash.success')
      .should('contain','You logged out of the secure area!' );
  });

  it ('Can\'t login with invalid username', () =>{
    cy.get('#username')
    .type(`Qwertyh`);
  cy.get('#password')
    .type('qwerty123!');
  cy.contains('button', 'Login')
    .click();
    cy.get('div#flash.flash.error')
    .should('contain','Your username is invalid!' );
  })

  it ('Can\'t login with invalid password', () =>{
    cy.get('#username')
    .type(`tomsmith`);
  cy.get('#password')
    .type('qwerty123!');
  cy.contains('button', 'Login')
    .click();
    cy.get('div#flash.flash.error')
    .should('contain','Your password is invalid!' );
  })
});

