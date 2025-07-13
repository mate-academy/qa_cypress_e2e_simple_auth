const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Тут можуть бути налаштування для Node.js подій,
      // але для цього завдання вони не потрібні, тому функція порожня.
    },
    // Встановлюємо базовий URL для тестування
    baseUrl: 'https://the-internet.herokuapp.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  },
  // Загальні опції Cypress
  video: true, // Записувати відео тестів
  screenshotsFolder: 'cypress/screenshots', // Папка для скріншотів
  videosFolder: 'cypress/videos', // Папка для відео
  downloadsFolder: 'cypress/downloads', // Папка для завантажень
  defaultCommandTimeout: 4000, // Стандартний таймаут для команд Cypress
  pageLoadTimeout: 60000, // Таймаут для завантаження сторінки
  viewportWidth: 1280, // Ширина вікна браузера
  viewportHeight: 720 // Висота вікна браузера
});
