function loginUser(userName, password) {
  cy.get('[name=username]').type(userName);
  cy.get('[name=password]').type(password);
  cy.get('[type=submit]').click();
};

function assertStatus(result, text) {
  cy.get(`#flash.flash.${result}`)
    .should('contain', text);
}
module.exports = { loginUser, assertStatus };
