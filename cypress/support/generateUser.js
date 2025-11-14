const { faker } = require('@faker-js/faker');

function generateUser() {
  const randomNumber = Math.random().toString().slice(2, 6);
  const username = faker.internet.userName() + randomNumber;
  // const userName = `Test_user#_${randomNumber}`;
  // const email = faker.internet.email();
  // const email = `${username}@example.com`;
  const password = faker.internet.password(8);

  return { username, password };
}

module.exports = { generateUser };
