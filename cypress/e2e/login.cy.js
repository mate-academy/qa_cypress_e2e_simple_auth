/// <reference types="cypress" />

describe('Login page', () => {
  beforeEach(() => {
    cy.visit(`https://the-internet.herokuapp.com/login`)
  });


  it('should provide an ability to log in with the valid creds and show validation message "You logged into a secure area!"', () => {
    cy.get('input#username')
      .type(`tomsmith`)

    cy.get('input#password')
      .type(`SuperSecretPassword!`)

    cy.get('i.fa.fa-2x.fa-sign-in')
      .click()

    cy.get('div.flash.success')
      .should('contain.text', 'You logged into a secure area!')

  });

  it('should show validation message "Your username is invalid!" for the invalid userName', () => {
    cy.get('input#username')
      .type(`tomsmith1`)

    cy.get('input#password')
      .type(`SuperSecretPassword!`)

    cy.get('i.fa.fa-2x.fa-sign-in')
      .click()

    cy.get('div.flash.error')
      .should('contain.text', 'Your username is invalid!')

  });  

  it('should show validation message "Your password is invalid!" for the invalid Password', () => {
    cy.get('input#username')
      .type(`tomsmith`)

    cy.get('input#password')
      .type(`SuperSecretPassword`)

    cy.get('i.fa.fa-2x.fa-sign-in')
      .click()

    cy.get('div.flash.error')
      .should('contain.text', 'Your password is invalid!')

  });

  it('should provide an ability to log out and show validation message "You logged out of the secure area!"', () => {
    cy.get('input#username')
      .type(`tomsmith`)

    cy.get('input#password')
      .type(`SuperSecretPassword!`)

    cy.get('i.fa.fa-2x.fa-sign-in')
      .click()

    cy.get('i.icon-2x.icon-signout')
      .click()
    
    cy.get('div.flash.success')
      .should('contain.text', 'You logged out of the secure area!')
    

  });
});
