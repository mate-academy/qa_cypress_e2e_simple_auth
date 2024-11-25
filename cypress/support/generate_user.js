const { faker } = require('@faker-js/faker');

function generateUser() {
  const username = faker.internet.userName().toLowerCase();
  const password = faker.internet.password();

  return { username, password };
}

module.exports = { generateUser };
