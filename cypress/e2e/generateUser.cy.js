function generateUser() {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';

  return { password, username };
};

function generateFakeUser() {
  const username = 't2omsmith';
  const password = 'S2uperSecretPassword!';

  return { password, username };
};

module.exports = { generateUser, generateFakeUser };
