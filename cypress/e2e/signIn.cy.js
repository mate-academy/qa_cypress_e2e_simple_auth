describe('Login Flow', () => {
  const validUsername = 'tomsmith';
  const validPassword = 'SuperSecretPassword!';
  const invalidUsername = 'invalidUsername';
  const invalidPassword = 'invalidPassword';

  it('should log in with valid credentials', () => {

    cy.visit('https://the-internet.herokuapp.com/login');


    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);


    cy.get('button[type="submit"]').click();


    cy.url().should('include', '/secure');
    cy.get('div[class="flash success"]').should('contain', 'You logged into a secure area!');
  });

  it('should show validation errors with invalid credentials', () => {

    cy.visit('https://the-internet.herokuapp.com/login');


    cy.get('input[name="username"]').type(invalidUsername);
    cy.get('input[name="password"]').type(invalidPassword);


    cy.get('button[type="submit"]').click();


    cy.get('div[class="flash error"]').should('contain', 'Your username is invalid!');
  });

  it('should log out successfully', () => {

    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('input[name="username"]').type(validUsername);
    cy.get('input[name="password"]').type(validPassword);
    cy.get('button[type="submit"]').click();


    cy.get('a[href="/logout"]').click();


    cy.url().should('include', '/login');
    cy.get('div[class="flash success"]').should('contain', 'You logged out of the secure area!');
  });
});
