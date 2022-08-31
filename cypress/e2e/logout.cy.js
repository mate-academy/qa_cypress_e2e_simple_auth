describe("User should be able", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
   
  it("to log out", () => {

    cy.get('input#username').type('tomsmith');

    cy.get('input#password').type('SuperSecretPassword!');

    cy.contains('[type="submit"]', 'Login').click();

    cy.contains('.button', 'Logout').click();

    cy.get('h2').should('contain.text', 'Login Page');
    
  })
  
});
