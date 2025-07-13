/// <reference types="cypress" />

describe('Authentication Flow on The Internet App', () => {
  // Виконується перед кожним тестом у цьому блоці
  beforeEach(() => {
    // Відвідуємо сторінку входу.
    // baseUrl вже налаштовано в cypress.config.js, тому використовуємо відносний шлях.
    cy.visit('/login');
    // Перевіряємо, що ми дійсно на сторінці входу, шукаючи заголовок
    cy.contains('h2', 'Login Page').should('be.visible');
  });

  // Сценарій 1: Успішний вхід з валідними обліковими даними
  it('should allow a user to log in with valid credentials', () => {
    // Вводимо валідний логін та пароль
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    // Клікаємо кнопку входу
    cy.get('button[type="submit"]').click();

    // Перевіряємо успішний вхід
    // Очікуємо побачити повідомлення про успіх
    cy.get('#flash.success')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');

    // Очікуємо побачити кнопку "Logout"
    cy.contains('.button.secondary.radius', 'Logout').should('be.visible');

    // Перевіряємо, що URL змінився на захищену область
    cy.url().should('include', '/secure');
  });

  // Сценарій 2: Вхід з невалідними обліковими даними та перевірка помилок
  it('should display an error message with invalid credentials', () => {
    // Вводимо невалідний логін та пароль
    cy.get('#username').type('invaliduser');
    cy.get('#password').type('wrongpassword');

    // Клікаємо кнопку входу
    cy.get('button[type="submit"]').click();

    // Перевіряємо, що з'явилося повідомлення про помилку
    cy.get('#flash.error')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!'); // Перевіряємо конкретний текст помилки

    // Перевіряємо, що кнопки "Logout" немає, і ми все ще на сторінці входу
    cy.contains('.button.secondary.radius', 'Logout').should('not.exist');
    cy.url().should('include', '/login');
  });

  // Сценарій 3: Вихід з додатку
  it('should allow a user to log out from the application', () => {
    // Спочатку входимо в систему, щоб мати можливість вийти
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Перевіряємо, що ми успішно увійшли (щоб уникнути помилок, якщо попередній крок не вдався)
    cy.get('#flash.success').should('be.visible');
    cy.url().should('include', '/secure');

    // Клікаємо кнопку "Logout"
    cy.contains('.button.secondary.radius', 'Logout').click();

    // Перевіряємо успішний вихід
    // Очікуємо побачити повідомлення про успішний вихід
    cy.get('#flash.success')
      .should('be.visible')
      .and('contain.text', 'You logged out of the secure area!');

    // Перевіряємо, що ми повернулися на сторінку входу
    cy.url().should('include', '/login');
    // Очікуємо побачити поля входу знову
    cy.get('#username').should('be.visible');
    cy.get('#password').should('be.visible');
  });
});
