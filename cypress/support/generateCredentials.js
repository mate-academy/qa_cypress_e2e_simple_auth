const faker = require('faker');

function generateCredentials() {
  const random = Math.random().toString().slice(2, 6);
  const fakeUsername = faker.internet.userName() + '_' + random;
  const fakePassword = '12345Qwert!';

  return { fakePassword, fakeUsername };
}

module.exports = { generateCredentials };