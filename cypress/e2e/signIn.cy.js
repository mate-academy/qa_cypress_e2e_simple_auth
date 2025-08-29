/// <reference types="cypress" />

// eslint-disable-next-line max-len
describe('Авторизация на сайте https://the-internet.herokuapp.com/login', () => {
  const url = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Успешный вход с корректными учетными данными', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Проверяем успешный вход
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged into a secure area!');
  });

  it('Вход с неверными учетными данными', () => {
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('invalidPassword');
    cy.get('button[type="submit"]').click();

    // Проверяем сообщение об ошибке
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'Your username is invalid!');
  });

  it('Выход из приложения', () => {
    // Сначала логинимся корректными данными
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    // Кликаем кнопку logout
    cy.get('a.button').contains('Logout').click();

    // Проверяем сообщение об успешном выходе
    cy.get('#flash')
      .should('be.visible')
      .and('contain.text', 'You logged out of the secure area!');
  });
});
