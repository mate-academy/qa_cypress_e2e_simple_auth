describe('Login and Logout Flow', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input#username').type('tomsmith')
    cy.get('input#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()

    cy.contains('You logged into a secure area!') // Перевірка успішного входу
  })

  it('should display validation error with invalid username', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input#username').type('invalidUsername')
    cy.get('input#password').type('SuperSecretPassword!') // Ви можете використовувати дійсний пароль для цього тесту
    cy.get('button[type="submit"]').click()

    cy.contains('Your username is invalid!') // Перевірка валідаційного повідомлення про недійсне ім'я користувача
  })

  it('should display validation error with invalid password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('input#username').type('tomsmith') // Ви можете використовувати дійсне ім'я користувача для цього тесту
    cy.get('input#password').type('invalidPassword')
    cy.get('button[type="submit"]').click()

    cy.contains('Your password is invalid!') // Перевірка валідаційного повідомлення про недійсний пароль
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
