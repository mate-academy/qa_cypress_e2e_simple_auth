function userData() {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';
  return { username, password };
}

function invalidUserUsername() {
  const username = 'aaaaaa';
  const password = 'SuperSecretPassword!';
  return { username, password };
}

function invalidUserPassword() {
  const username = 'tomsmith';
  const password = '11111!';
  return { username, password };
}

module.exports = { userData, invalidUserUsername, invalidUserPassword };
