/// <reference types="cypress" />

const { it } = require("faker/lib/locales")

describe('User should be able', () => {
 it('to login', () => {
   cy.visit(`https://the-internet.herokuapp.com/login`)

    })
})