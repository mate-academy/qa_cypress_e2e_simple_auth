const loginUser = (username, password) => {
  cy.get('#username').type(username);
  cy.get('#password').type(password);
  cy.get('.fa').click();
};

module.exports = { loginUser };
