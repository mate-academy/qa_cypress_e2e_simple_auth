function userData() {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  return { username, password };
}

function invalidUserData() {
  const username = 'aaaaaa';
  const password = '11111';
  return { username, password };
}

module.exports = { userData, invalidUserData };
