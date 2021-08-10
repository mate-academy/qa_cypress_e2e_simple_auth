/// <reference types = 'cypress' />

describe('User can', () => {

before('', () => {
cy.visit('https://the-internet.herokuapp.com/login');
});

it('should be able to register with Login (tomsmith/SuperSecretPassword!)', () => {

cy.get('[name="username"]').type('tomsmith');
cy.get('[name="password"]').type('SuperSecretPassword!');
cy.get('.fa').click();
cy.get('#flash').should('contain', 'You logged into a secure area!');
cy.get('[href="/logout"]').click();
cy.get('#flash').should('contain', ' You logged out of the secure area!');

})

it('should not be able to registrate with invalid creds.', () => {

cy.get('[name="username"]').type('tomsmith11');
cy.get('[name="password"]').type('SuperSecretPassword!11');
cy.get('.fa').click();
cy.get('#flash').should('contain', 'Your username is invalid!');

})

it('should be able to Logout from app.', () => {

cy.get('[name="username"]').type('tomsmith');
cy.get('[name="password"]').type('SuperSecretPassword!');
cy.get('.fa').click();
cy.get('#flash').should('contain', 'You logged into a secure area!');
cy.get('[href="/logout"]').click();
cy.get('#flash').should('contain', ' You logged out of the secure area!');
})

});
