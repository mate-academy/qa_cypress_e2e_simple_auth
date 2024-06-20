
describe('Sign In page', () => {
  const username = 'tomsmith';
  const password = 'SuperSecretPassword!';  
  
  beforeEach(() => {
      cy.visit("/login");
    });
  
    it('should log in with valid credentials', () => {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('button[type="submit"]').click();
      cy.get('#flash').should('contain', 'You logged into a secure area!');
    });
  
    it('should show validation errors with invalid username', () => {
      cy.get('#username').type('invalid_username');
      cy.get('#password').type(password);
      cy.get('button[type="submit"]').click();
      cy.get('#flash').should('contain', 'Your username is invalid!');
    });

    it('should show validation errors with invalid password', () => {
      cy.get('#username').type(username);
      cy.get('#password').type('invalid_password');
      cy.get('button[type="submit"]').click();
      cy.get('#flash').should('contain', 'Your password is invalid!');
    });
  
    it('should log out successfully', () => {
      cy.get('#username').type(username);
      cy.get('#password').type(password);
      cy.get('button[type="submit"]').click();
      cy.get('a[href="/logout"]').click();
      cy.get('#flash').should('contain', 'You logged out of the secure area!');
    });
  });