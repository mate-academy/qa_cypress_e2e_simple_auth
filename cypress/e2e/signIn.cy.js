describe('Authentication and Logout Flow Testing', () => {
  it('Login with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    //  Валідні тести
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

 
    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!').should('be.visible');
  });

  it('Login with invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');

    //  Тут вже не валідні 
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');
    cy.get('button[type="submit"]').click();

 
    cy.contains('Your username is invalid!').should('be.visible');
  });

  it('Logout from the application', () => {
 
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();


    cy.contains('Logout').click();

    cy.url().should('include', '/login');
    cy.contains('You logged out of the secure area!').should('be.visible');
  });
});
