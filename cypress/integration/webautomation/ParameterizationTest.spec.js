describe('Orange HRM Parameterization Suite', function() {
    
    before(function() {
        cy.fixture('testdata').then(function(data){
            this.data = data
        })        
    })

    beforeEach(function() {
        //Navigate to URL
        cy.visit(this.data.url)

        //enter username
        cy.get("#txtUsername").clear().type(this.data.username)

        //enter password
        cy.get("#txtPassword").clear().type(this.data.password)

        //click on login
        cy.get("#btnLogin").click()
    })

    afterEach(function() {
         //click on welcome link
         cy.get("#welcome").click()

         //click on logout link
         cy.get("#welcome-menu > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click()
    })

    it('Verify dashboard tab is present', function() {
        //check dashboard is present in the home page
        cy.get("#menu_dashboard_index > b:nth-child(1)").should('be.visible')
    })

  })
