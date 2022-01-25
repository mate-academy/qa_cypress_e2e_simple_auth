describe('Cypress HW2 Herokuapp valid creds test', () => {
    it('Visits Herokuapp Sign in on web ', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.url().should('include', '/login')
      })
  
    
    it('Fills Username for Sign In ', () => { 
      cy.get('#username')
        .type('tomsmith')
        .should('have.value', 'tomsmith')
      })
  
    it('Fills Password for Sign In ', () => { 
      cy.get('#password')
        .type('SuperSecretPassword!')
        .should('have.value', 'SuperSecretPassword!')
      })
    
    it('Clicks Sign in bttn ', () => { 
      cy.get('.fa')
        .contains('Login')
        .click()
      })
    
    it('Asserts user is logged in ', () => { 
      cy.get('#flash')
        .contains('You logged into a secure area!')        
      })
      
    it('Assert Logout bttn exisis', () => { 
      cy.get('.button')
        .contains('Logout')       
        })
    
    it('Clicks Logout bttn ', () => { 
      cy.get('.button')
        .click()
      })
      
    it('Assert Logout is done ', () => { 
      cy.get('#flash')
        .contains('You logged out of the secure area!')
      })
  })

  describe('Cypress HW2 Herokuapp invalid creds test', () => {
    it('Visits Herokuapp Sign in on web ', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      cy.url().should('include', '/login')
      })
  
    
    it('Fills valid Username for Sign In ', () => { 
      cy.get('#username')
        .type('tomsmith')
        .should('have.value', 'tomsmith')
      })
  
    it('Fills invalid Password for Sign In ', () => { 
      cy.get('#password')
        .type('SuperSecretPassword')
        .should('have.value', 'SuperSecretPassword')
      })
    
    it('Clicks Sign In bttn ', () => { 
      cy.get('.fa')
        .contains('Login')
        .click()
      })
    
    it('Asserts password is not correct. Not logged in', () => { 
      cy.get('#flash')
        .contains('Your password is invalid!')
      cy.url().should('include', '/login')         
      })
  
    it('Fills invalid Username for Sign In ', () => { 
      cy.get('#username')
        .type('tomsmith1')
        .should('have.value', 'tomsmith1')
      })
    
    it('Fills valid Password for Sign In ', () => { 
      cy.get('#password')
        .type('SuperSecretPassword!')
        .should('have.value', 'SuperSecretPassword!')
      })
     
    it('Clicks Sign In bttn ', () => { 
      cy.get('.fa')
        .contains('Login')
        .click()
      })
     
    it('Asserts username is not correct. Not logged in', () => { 
      cy.get('#flash')
        .contains('Your username is invalid!')
      cy.url().should('include', '/login')         
      })
   
  
      //   it('Assert Logout bttn exisis', () => { 
  //     cy.get('.button')
  //       .contains('Logout')       
  //       })
    
  //   it('Clicks Logout bttn ', () => { 
  //     cy.get('.button')
  //       .click()
  //     })
      
  //   it('Assert Logout is done ', () => { 
  //     cy.get('#flash')
  //       .contains('You logged out of the secure area!')
  //     })
 })

