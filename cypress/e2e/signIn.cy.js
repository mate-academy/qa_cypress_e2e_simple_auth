/// <reference types="cypress" />

const { generateUser } = require("../support/generate");

describe("Sign In page", () => {
	beforeEach(() => {
		cy.visit("https://the-internet.herokuapp.com/login");
	});
	it("should provide an ability to log in with valid credentials", () => {
		cy.get("#username").type("tomsmith");
		cy.get("#password").type("SuperSecretPassword!");
		cy.contains('[type="submit"]', "Login")
			.click()
			.then(() => {
				cy.url("eql", "https://the-internet.herokuapp.com/secure");
			});
	});

	it("should provide an ability to log in with invalid credentials", () => {
		const { userName, email, password } = generateUser();

		cy.get("#username").type(userName);
		cy.get("#password").type(password);
		cy.contains('[type="submit"]', "Login")
			.click()
			.then(() => {
				cy.get(".subheader").should(
					"contain.text",
					"This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages."
				);
				cy.url("eql", "https://the-internet.herokuapp.com/secure");
			});
	});

	it("Should allow to logout the logged in user", () => {
		cy.get("#username").type("tomsmith");
		cy.get("#password").type("SuperSecretPassword!");
		cy.contains('[type="submit"]', "Login")
			.click()
			.then(() => {
				cy.url("eql", "https://the-internet.herokuapp.com/secure");
			});

		cy.get(".button")
			.click()
			.then(() => {
				cy.url("eql", "https://the-internet.herokuapp.com/login");
			});
	});
});
