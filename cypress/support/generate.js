const faker = require('faker');

function rightCreds() {
  const username = 'tomsmith'; 
  const password = 'SuperSecretPassword!';

  return {username, password}; 
}

function wrongPassword() {
  const username = 'tomsmith';
  const password = faker.internet.password();

  return { username, password };
}

function wrongUsername() {
  const username = faker.internet.userName();
  const password = 'SuperSecretPassword!';

  return { username, password };
}

module.exports = { rightCreds, wrongPassword, wrongUsername };
