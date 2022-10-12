describe('Login with valid creds', () => {
    it('Sign in', () => {
      cy.visit('https://the-internet.herokuapp.com/login')
      .get('h2')
      .should('contain.text', 'Login Page')

      cy.get('#username')
        .type('test_user')

      cy.get('#password')  
        .type('test_user123')

      cy.get('.fa')
        .click()

      cy.get('#flash')
        .should('contain.text', 'Your username is invalid!')

    });
});