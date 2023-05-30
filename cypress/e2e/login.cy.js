describe('Login and Logout Flow', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input#username').type('tomsmith')
    cy.get('input#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.contains('You logged into a secure area!') // Перевірка успішного входу
  })

  it('should display validation errors with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input#username').type('invalidUsername')
    cy.get('input#password').type('invalidPassword')
    cy.get('button[type="submit"]').click()

    cy.contains('Your username is invalid!') // Перевірка валідаційних повідомлень про невірні дані
  })

  it('should logout from the app', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input#username').type('tomsmith')
    cy.get('input#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.contains('You logged into a secure area!') // Перевірка успішного входу

    cy.get('a.button.secondary.radius').click()

    cy.contains('You logged out of the secure area!') // Перевірка успішного виходу
  })
})
