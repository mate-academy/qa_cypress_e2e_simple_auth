const faker = require('faker');

function wrongPassword() {
  const username = 'tomsmith';
  const password = faker.internet.password();

  return { username, password };
}

module.exports = { wrongPassword };
