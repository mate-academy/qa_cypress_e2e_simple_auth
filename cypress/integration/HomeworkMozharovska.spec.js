describe('User can', () => {
  before(() => {
    
  });

  it('successfull log in with valid data', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
  });

  it('have an error when try to use invalid data', () => {
    let newUserName = 'username' + Math.floor (Math.random () * 100000);
    let newPassword = 'password' + Math.floor (Math.random () * 100000) + '@ gmail.com';
    
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type(newUserName);
    cy.get('#password').type(newPassword);
    cy.get('.radius').click();
  });

  it('successfull log out', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button').click();
    cy.get('#flash').should('contain', 'logged out')
  });
});
