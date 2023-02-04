/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {

    cy.visit('login');

  });

  it('Authorization with valid user', () => {

    cy.get('#username').type(`tomsmith`, { delay: 100 });

    cy.get('#password').type(`SuperSecretPassword!`, { delay: 100 });
    
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');

    cy.get('.icon-2x').click();

  });

  it('Authorization with not valid username', () => {

    cy.get('#username').type(`tomsmith123`, { delay: 100 });

    cy.get('#password').type(`SuperSecretPasword!`, { delay: 100 });
    
    cy.get('.fa').click();

    //cy.pause();

    cy.get('#flash').should('contain.text', ' Your username is invalid!');

  });
  
  it('Authorization with not valid password', () => {

    cy.get('#username').type(`tomsmith`, { delay: 100 });

    cy.get('#password').type(`SuperSecretPasword123!`, { delay: 100 });
    
    cy.get('.fa').click();

    cy.get('#flash').should('contain.text', ' Your password is invalid!');

  });

  it('Logout check', () => {

    cy.url().should('include', '/login');
  });
});
