/// <reference types="cypress" />

describe('bmi-calc', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  describe('metric', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/metric')
    })
    
    it('routes to metric page', () => {
      cy.url().should('include', '/metric');
    })

    it('returns the correct bmi', () => {
      cy.get('#height').click({force: true}).type(230)
      cy.get('#weight').click({force: true}).type(120)
      cy.get('button').click()
      cy.get('#bmi').contains('You have a B.M.I. of 23')
    })

    it('clears the form (metric)', () => {
      cy.get('#height').click({force: true}).type(70)
      cy.get('#weight').click({force: true}).type(183)
      cy.get('button').click()
      cy.get('#height').should('be.empty')
      cy.get('#weight').should('be.empty')
    })
  })

  describe('imperial', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/imperial')
    })

    it('routes to imperial page', () => {
      cy.url().should('include', '/imperial');
    })
  
    it('returns the correct bmi (imperial)', () => {
      cy.get('#height').click({force: true}).type(70)
      cy.get('#weight').click({force: true}).type(183)
      cy.get('button').click()
      cy.get('#bmi').contains('You have a B.M.I. of 26')
    })
  
    it('clears the form (imperial)', () => {
      cy.get('#height').click({force: true}).type(70)
      cy.get('#weight').click({force: true}).type(183)
      cy.get('button').click()
      cy.get('#height').should('be.empty')
      cy.get('#weight').should('be.empty')
    })
  })
})
