

describe('Log In', () => {

    it('Log In with valid credentials.', () => {

      const url = ' https://the-internet.herokuapp.com/login';
      const username = 'tomsmith';
      const password = 'SuperSecretPassword!';
      
      cy.visit(url)

      cy.get('#username')
      .type(username)
      .should('have.value', username)

      cy.get('#password')
        .type(password)
        .should('have.value', password)

      cy.get('.radius').click()

      cy.get('#flash').should('contain', 'You logged into a secure area!') 
    });


    it('Log In with invalid credentials.', () => {

        const url = ' https://the-internet.herokuapp.com/login';
        const username = 'tomcarpenter';
        const password = 'TopSecretPassword!';
        
        cy.visit(url)
  
        cy.get('#username')
        .type(username)
        .should('have.value', username)
  
        cy.get('#password')
          .type(password)
          .should('have.value', password)
  
        cy.get('.radius').click()
  
        cy.get('#flash').should('contain', 'Your username is invalid!') 
      });


      it('Log Out', () => {

        const url = ' https://the-internet.herokuapp.com/login';
        const username = 'tomsmith';
        const password = 'SuperSecretPassword!';
        
        cy.visit(url)
  
        cy.get('#username')
        .type(username)
        .should('have.value', username)
  
        cy.get('#password')
          .type(password)
          .should('have.value', password)
  
        cy.get('.radius').click()

        cy.get('.radius').click()

        cy.get('#flash').should('contain', 'You logged out of the secure area!') 
      });
  
});

