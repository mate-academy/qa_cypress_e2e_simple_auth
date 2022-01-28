/// <reference types="cypress" />
describe('User should be able', () => {
  let username = 'tomsmith';
  let password = 'SuperSecretPassword!';
  
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

    it('to sign in with existing valid data', () => {
    cy.get('#username').type(username).should('have.value', username);
    cy.get('#password').type(password).should('have.value', password);
    cy.get('.fa').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
  });

  it('to get an error message if he input invalid creds', () => {
    cy.get('#username').type('4topopalo').should('have.value', '4topopalo');
    cy.get('#password').type(password).should('have.value', password);
    cy.get('.fa').click();
    cy.get('[class="flash error"]').should('contain', 'Your username is invalid!');
  });

  it('to logout succesfully by clicking [Log out] button', () => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    cy.get('#flash').should('contain', 'You logged out of the secure area!');
  });
  
})