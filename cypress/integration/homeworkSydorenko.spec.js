describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login')
    })

    
    it('Sign in', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.fa.fa-2x.fa-sign-in').click();

      cy.get('#flash').contains('You logged into a secure area!').should('exist');

      cy.get('.button').click();

      cy.get('#username').type('tomsmi');
      cy.get('#password').type('SuperSecretPass');
      cy.get('.fa.fa-2x.fa-sign-in').click();

      cy.wait(4000);
      cy.get('#flash').contains('Your username is invalid!').should('exist');

      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.fa.fa-2x.fa-sign-in').click();

      cy.get('#flash').contains('You logged into a secure area!').should('exist');

      cy.get('.button').click();
      cy.wait(4000);
      cy.get('#flash').contains('You logged out of the secure area!').should('exist');
       })
  })