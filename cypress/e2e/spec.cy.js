describe('Login', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('You logged into a secure area!').should('be.visible')
  })

  it('should show validation errors with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('invalid_username')
    cy.get('#password').type('invalid_password')
    cy.get('button[type="submit"]').click()
    cy.contains('Your username is invalid!').should('be.visible')
  })

  it('should logout successfully', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.contains('You logged into a secure area!').should('be.visible')
    cy.contains('Logout').click()
    cy.contains('You logged out of the secure area!').should('be.visible')
  })
})
