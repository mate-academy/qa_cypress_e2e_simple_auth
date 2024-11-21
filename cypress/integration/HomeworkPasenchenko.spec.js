describe('Successful login', () => {
  it('Log in on the website with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.get('#flash').contains('You logged into a secure area!').should('exist');
  })
})

describe('Unsuccessful login', () => {
  it('Log in on the website with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword');

    cy.get('.fa').click();

    cy.get('#flash').contains('Your password is invalid!').should('exist');
  })
})

describe('Successful logout', () => {
  it('Log out on the website with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

    cy.get('.fa').click();

    cy.get('#flash').contains('You logged into a secure area!').should('exist');

    cy.get('.button').click();

    cy.get('#flash').contains('You logged out of the secure area!').should('exist');
  })
})