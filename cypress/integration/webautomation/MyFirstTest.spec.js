//Test Suite
describe('My First Test Suite', function() {
    
    //Test Case 1 - Negative Test
    it('Verify upstox login page title', function() {
      
        //Navigate to URL
        cy.visit('https://pro.upstox.com/login')

        //Assertion
        cy.title().should('eq', 'Upstocks Pro')

    })

    //Test Case 2 - Positive Test
    it('Verify upstox login page title', function() {
      
        //Navigate to URL
        cy.visit('https://pro.upstox.com/login')

        //Assertion
        cy.title().should('eq', 'Upstox Pro')

    })

  })
