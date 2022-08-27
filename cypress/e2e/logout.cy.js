describe("Sign in with valid data", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
   
  it("should allow to sign in with valid data", () => {

    cy.get('input#username').type('tomsmith');

    cy.get('input#password').type('SuperSecretPassword!');

    cy.contains('[type="submit"]', 'Login').click();

    cy.contains('.button', 'Logout').click();

    cy.get('h2').should('contain.text', 'Login Page');
    
  })
  
});
