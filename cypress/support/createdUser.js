function createdUser() {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  return { username, password };
}

module.exports = { createdUser };
