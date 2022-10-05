///<reference types="cypress" />

describe('User is able to ', () => {
   beforeEach(() => {
        cy.visit(`https://the-internet.herokuapp.com/login`)

    });

    it('Sign in', () => {
      const userName = 'tomsmith'
       cy.get('[id="username"]')
       .type(userName);

       cy.get('[id="password"]')
       .type('SuperSecretPassword!');

       cy.get('.fa')
       .click();

       cy.get('[id="flash"]')
       .should('contain.text','You logged into a secure area!')
       
    });

     it('See validation error with invalid Credential',() => {
        cy.get('[id="username"]')
       .type('xxx');

       cy.get('[id="password"]')
       .type('yyy');

       cy.get('.fa')
       .click();
      
       cy.get('[id="flash"]')
        .should('contain.text', 'Your username is invalid!');
      });
        
      it('Successfully logged out with message',() => {
        cy.visit(`https://the-internet.herokuapp.com/login`)
       

        cy.get('[id="username"]')
       .type('tomsmith');

       cy.get('[id="password"]')
       .type('SuperSecretPassword!');

       cy.get('.fa')
       .click();

       cy.get('.button')
       .click();

       cy.get('[id="flash"]')
       .should('contains.text','You logged out of the secure area!')

      });
       
 });
 
  