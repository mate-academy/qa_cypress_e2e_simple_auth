describe('Login', () => {
    it('valid data', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get ('#username')
          .type ('tomsmith')
        cy.get ('#password')
          .type ('SuperSecretPassword!')
        cy.get ('.radius')
          .click ()
        cy.get ('#flash')
          .contains ('You logged into a secure area!').should ('exist')
    });

    it('invalid data', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get ('#username')
          .type ('tomsmith')
        cy.get ('#password')
          .type ('SuperWrongPassword!')
        cy.get ('.radius')
          .click ()
        cy.get ('#flash')
          .contains ('Your password is invalid').should ('exist')
        
    });

    it('logout', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get ('#username')
          .type ('tomsmith')
        cy.get ('#password')
          .type ('SuperSecretPassword!')
        cy.get ('.radius')
          .click ()
        cy.get ('#flash')
          .contains ('You logged into a secure area!').should ('exist')
        cy.get ('.icon-2x')
          .click ()
        cy.get ('#flash')
          .contains ('You logged out of the secure area!').should ('exist')
    });
  });
