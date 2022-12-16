describe("Login page", () => {
  it("should check visiting login page", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.contains("Login Page");

    cy.url().should("include", "login");
  });

  it("should login user with valid creds", () => {
    cy.visit("https://the-internet.herokuapp.com/login");

    cy.get('[name="username"]').type("tomsmith");
    cy.get('[name="password"]').type("SuperSecretPassword!");

    cy.get(".fa").click();

    cy.get(".flash").should("contain", "You logged into a secure area!");

    cy.url().should("include", "secure");
  });
});

it("Unable to login with invalid login", () => {
  cy.visit("https://the-internet.herokuapp.com/login");

  cy.get('[name="username"]').type("emmasmith");
  cy.get('[name="password"]').type("BadSecretPassword!");

  cy.get(".fa").click();

  cy.get(".flash").should("contain", "Your username is invalid!");
});

it("Unable to login with invalid password", () => {
  cy.visit("https://the-internet.herokuapp.com/login");

  cy.get('[name="username"]').type("tomsmith");
  cy.get('[name="password"]').type("BadSecretPassword!");

  cy.get(".fa").click();

  cy.get(".flash").should("contain", "Your password is invalid!");
});

it("should log out from the app", () => {
  cy.visit("https://the-internet.herokuapp.com/login");

  cy.get('[name="username"]').type("tomsmith");
  cy.get('[name="password"]').type("SuperSecretPassword!");

  cy.get(".fa").click();

  cy.get('[href="/logout"]').click();

  cy.get(".flash").should("contain", "You logged out of the secure area!");

  cy.url().should("include", "login");
});
