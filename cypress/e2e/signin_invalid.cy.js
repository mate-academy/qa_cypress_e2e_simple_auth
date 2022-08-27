describe("Sign in with invalid data", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
   
  it("should not allow to sign in with invalid data", () => {

    cy.get('input#username').type('natashabrown');

    cy.get('input#password').type('qwerty123');

    cy.contains('[type="submit"]', 'Login').click();

    cy.get('div#flash').should('contain.text', 'Your username is invalid!');
    
  })
  
});