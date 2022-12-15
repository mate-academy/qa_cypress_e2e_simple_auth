/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
 
     cy.visit('/login')
   });
 
   it('should check if user visit login page ', () => {
 
     cy.contains('Login Page');
 
     cy.url().should('include', 'login');
 
   });
 
   it('should login with valid creds ', () => {    
       
     cy.get('#username').type('tomsmith');
     cy.get('#password').type('SuperSecretPassword!');
     
     cy.get('.fa').click();
     
     cy.get('#flash').should('contain', 'You logged into a secure area!');
 
     cy.url().should('include', 'secure')
   });
 
   it('shouldn\'t login with invalid creds ', () => {      
          
     cy.get('#username').type('jonnywickjr');
     cy.get('#password').type('NotSuperSecretPassword!');
 
     cy.get('.fa').click();
     
     cy.get('#flash').should('contain', 'Your username is invalid!')
 });
 it('should log out from the app ', () => {    
 
   cy.get('#username').type('tomsmith');
   cy.get('#password').type('SuperSecretPassword!');
 
   cy.get('.fa').click();
 
   cy.get('[href="/logout"]').click();
 
   cy.get('#flash').should('contain', 'You logged out of the secure area!');
   
   cy.url().should('include', 'login')
 });
 });
 
