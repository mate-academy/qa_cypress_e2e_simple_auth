/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(`https://the-internet.herokuapp.com/login`)
  });

  
  it('should provide an ability to log in with the valid creds and show validation message "You logged into a secure area!"', () => {
    cy.get('[id=username]')
      .type(`tomsmith`)

    cy.get('[id=password]')
      .type(`SuperSecretPassword!`)

    cy.get('.fa')
      .click()

    cy.get('[id=flash]')
      .should('contain.text', 'You logged into a secure area!')

  });

  it('should show validation message "Your username is invalid!" for the invalid userName', () => {
    cy.get('[id=username]')
      .type(`tomsmith1`)

    cy.get('[id=password]')
      .type(`SuperSecretPassword!`)

    cy.get('.fa')
      .click()

    cy.get('[id=flash]')
      .should('contain.text', 'Your username is invalid!')

  });  

  it('should show validation message "Your password is invalid!" for the invalid Password', () => {
    cy.get('[id=username]')
      .type(`tomsmith`)

    cy.get('[id=password]')
      .type(`SuperSecretPassword`)

    cy.get('.fa')
      .click()

    cy.get('[id=flash]')
      .should('contain.text', 'Your password is invalid!')

  });

  it('should provide an ability to log out and show validation message "You logged out of the secure area!"', () => {
    cy.get('[id=username]')
      .type(`tomsmith`)

    cy.get('[id=password]')
      .type(`SuperSecretPassword!`)

    cy.get('.fa')
      .click()

    cy.get('i.icon-2x.icon-signout')
      .click()
    
    cy.get('[id=flash]')
      .should('contain.text', 'You logged out of the secure area!')
    

  });
});
