//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('Hooks Suite', function() {

    //all the hooks must be defined test cases inside a test suite

    before(function() {
        
        // runs once before all tests in the block
        cy.log("Test Setup")
        
    })

    beforeEach(function() {
    
        // runs before each test in the block
        cy.log("Login to application")

    })

    afterEach(function() {
    
        // runs after each test in the block
        cy.log("Logout from application")

    })

    after(function() {
    
        // runs once after all tests in the block
        cy.log("Test Teardown")

    })

    it('First Test Case', function() {
      
        cy.log("This is first test case")

    })

    it('Second Test Case', function() {
      
        cy.log("This is second test case")

    })

    it('Third Test Case', function() {
      
        cy.log("This is third test case")

    })

  })
