const validUserName = 'tomsmith';
const validPassword = 'SuperSecretPassword!';
const invalidUserName = 'invalidUsername';
const invalidPassword = 'invalidPassword';
const validLoginMessage = 'You logged into a secure area!';
const invalidLoginMessage = 'Your username is invalid!';
const logoutMessage = 'You logged out of the secure area!';

const loginUser = (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
};

export
{
  validUserName,
  validPassword,
  invalidUserName,
  invalidPassword,
  validLoginMessage,
  invalidLoginMessage,
  logoutMessage,
  loginUser
};
