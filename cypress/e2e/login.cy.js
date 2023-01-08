/// <reference types="cypress" />


describe('Login page', () => {
  beforeEach(() => {
    cy.visit(`/login`);
  });

  it('should allow USER to LogIn with valid creds', () => {
    cy.get('#username')
      .type('tomsmith');

    cy.get('#password')
      .type('SuperSecretPassword!');
    
    cy.contains('.radius', " Login")
      .click();

    cy.get('#flash')
    .should('contain.text','You logged into a secure area!');

    cy.assertUrl('/secure'); 

  });

  it('should  not allow USER to LogIn with invalid username', () => {

    const randomNumber = Math.random().toString().slice(2,10);
    const username = `test${randomNumber}`;
  

    cy.get('#username')
    .type(username);

  cy.get('#password')
    .type('SuperSecretPassword!');
  
  cy.contains('.radius', " Login")
    .click();

    cy.assertUrl('/login'); 

    cy.get('#flash')
    .should('contain.text',' Your username is invalid!');

  });

  it('should  not allow USER to LogIn with invalid password', () => {

    const randomNumber = Math.random().toString().slice(2,10);
    const password = `test${randomNumber}!!`;
  

    cy.get('#username')
    .type('tomsmith');

  cy.get('#password')
    .type(password);
  
  cy.contains('.radius', " Login")
    .click();

    cy.assertUrl('/login'); 

    cy.get('#flash')
    .should('contain.text',' Your password is invalid!');

  });

  it('should  not allow USER to LogIn with invalid creads', () => {

    const randomNumber = Math.random().toString().slice(2,10);
    const username = `test${randomNumber}`; 
    const password = `${username}!!`;
   

    cy.get('#username')
    .type(username);

  cy.get('#password')
    .type(password);
  
  cy.contains('.radius', " Login")
    .click();

    cy.assertUrl('/login'); 

    cy.get('#flash')
    .should('contain.text',' Your username is invalid!');

  });

  it('should allow USER to LogOut from the app', () => {   
    cy.get('#username')
    .type('tomsmith');

  cy.get('#password')
    .type('SuperSecretPassword!');
  
  cy.contains('.radius', " Login")
    .click();

    cy.contains('.icon-2x', 'Logout')
      .click();

    cy.assertUrl('/login'); 

    cy.get('#flash')
    .should('contain.text',' You logged out of the secure area!');

    cy.get('h2')
      .should('contain.text','Login Page'); 
  });
});
