describe('Run Only Test Suite', function() {

    it('Verify google page title', function() {
      
        //Navigate to URL
        cy.visit('https://www.google.com/')

        //Assertion
        cy.title().should('eq', 'Google')

    })

    // only this test will run in this suite
    it.only('Verify upstox login page title', function() {
      
        //Navigate to URL
        cy.visit('https://pro.upstox.com/login')

        //Assertion
        cy.title().should('eq', 'Upstox Pro')

    })

  })
