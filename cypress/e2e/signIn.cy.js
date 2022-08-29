/// <reference types="cypress" />


const { testData } = require('../support/testdata');


describe('Login functionality', () => {
  it('Should login the user with valid data', () => {
    cy.login(testData().email, testData().password)

    cy.contains(testData().username)
  });

  it('Should not login the user with invalid data', () => {
    cy.visit('https://react-redux.realworld.io/#')

    cy.login(testData().email + 'sho', testData().password + 'sho')

    cy.contains('email or password is invalid')
  })

  it('Should logout the user', () => {
    cy.login(testData().email, testData().password)

    cy.contains(testData().username)
      .click()
    
    cy.contains('Edit Profile Settings')
      .click()

    cy.get('.btn-outline-danger')
      .click()
      
    cy.contains('Sign in')
  })
});
