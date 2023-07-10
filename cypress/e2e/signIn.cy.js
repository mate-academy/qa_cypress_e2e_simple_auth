/// <reference types="cypress" />

describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')

  });
  
    const userName = 'tomsmith';
    const password = 'SuperSecretPassword!';

  it('should provide an ability to log in with valid credentials', () => { 
    

    cy.contains('Login Page')
      .click();

    cy.get('h2')
       .should('contain.text', 'Login Page');

    cy.get('[id="username"]')
       .type(userName);

    cy.get('[id="password"]')
       .type(password);

    cy.get('.fa')
       .click();
    
    cy.get('h2')
      .should('contain.text', 'Secure Area');
    
    cy.url()
      .should('include', '/secure');

  });

   it('should not log in with invalid credentials', () => { 
  
     const userName = Math.random().toString().slice(2);
     const password = Math.random().toString().slice(2);
     
     cy.contains('Login Page')
      .click();

    cy.get('h2')
       .should('contain.text', 'Login Page');

    cy.get('[id="username"]')
       .type(userName);

    cy.get('[id="password"]')
       .type(password);

    cy.get('.fa')
       .click();
    
    cy.get('[id="flash"]')
      .should('contain.text', 'Your username is invalid!');
     
    cy.get('[id="username"]')
       .type('tomsmith');

    cy.get('[id="password"]')
       .type(password);

    cy.get('.fa')
       .click();
    
    cy.get('[id="flash"]')
      .should('contain.text',  'Your password is invalid!');
    
     cy.url()
      .should('include', '/');
     
   });
  
   it('should provide an ability to log out', () => { 

    cy.contains('Login Page')
      .click();

    cy.get('h2')
       .should('contain.text', 'Login Page');

    cy.get('[id="username"]')
       .type(userName);

    cy.get('[id="password"]')
       .type(password);

    cy.get('.fa')
       .click();
    
    cy.get('h2')
      .should('contain.text', 'Secure Area');
    
    cy.url()
      .should('include', '/secure');
    
     cy.get('.button')
       .click();
     
    cy.get('h2')
       .should('contain.text', 'Login Page');
     
  });

});