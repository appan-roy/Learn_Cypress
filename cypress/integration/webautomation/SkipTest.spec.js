describe('Skip Test Suite', function() {

    it('Verify google page title', function() {
      
        //Navigate to URL
        cy.visit('https://www.google.com/')

        //Assertion
        cy.title().should('eq', 'Google')

    })

    // skipping this test. this won't run during execution
    it.skip('Verify upstox login page title', function() {
      
        //Navigate to URL
        cy.visit('https://pro.upstox.com/login')

        //Assertion
        cy.title().should('eq', 'Upstox Pro')

    })

  })
