describe("User should not be able", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
   
  it("to sign in with invalid username", () => {

    cy.get('input#username').type('natashabrown');

    cy.get('input#password').type('SuperSecretPassword!');

    cy.contains('[type="submit"]', 'Login').click();

    cy.get('div#flash').should('contain.text', 'Your username is invalid!');
    
  })

  it("to sign in with invalid password", () => {

    cy.get('input#username').type('tomsmith');

    cy.get('input#password').type('qwerty123');

    cy.contains('[type="submit"]', 'Login').click();

    cy.get('div#flash').should('contain.text', 'Your password is invalid!');
    
  })
  
});