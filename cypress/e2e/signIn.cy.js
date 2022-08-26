/// <reference types="cypress" />

const username = 'tomsmith';
const password = 'SuperSecretPassword!';

describe('Sign In and Log out', () => {
  beforeEach(() => {
    cy.visit('/login');
  })
  
  it('login with test data', () => {

        cy.loginUser(username, password);
       
        cy.get('[class="flash success"]')
        .should('contain', ' You logged into a secure area!');

        cy.assertUrl('/secure');
      })

      it('login with invalid username', () => {

           cy.get('[name="username"]')
            .type('tom');
    
            cy.get('[name="password"]')
            .type(password);
    
            cy.get('[class="fa fa-2x fa-sign-in"]')
            .click();
           
            cy.get('[class="flash error"]')
            .should('contain', ' Your username is invalid!');
          });

          it('login with invalid password', () => {

            cy.get('[name="username"]')
             .type(username);
     
             cy.get('[name="password"]')
             .type('1');
     
             cy.get('[class="fa fa-2x fa-sign-in"]')
             .click();
            
             cy.get('[class="flash error"]')
             .should('contain', 'Your password is invalid!');
           });

          it('logout happy case', () => {

          cy.loginUser(username, password);

           cy.get('[class = "icon-2x icon-signout"]')
           .click();

           cy.get('[class="flash success"]')
            .should('contain', 'You logged out of the secure area!');

            cy.assertUrl('/login');
    });
});

