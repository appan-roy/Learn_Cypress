describe('Orange HRM Data Driven Suite', function() {
    
    before(function() {
        cy.fixture('orangehrmcred').then(function(data){
            this.data = data
        })        
    })

    it('Verify Orange HRM Login', function() {
        
        cy.orangeHrmStartApp(this.data.url)
        
        for(var i = 0; i < this.data.username.length; i++){
            
            cy.orangeHrmLogin(this.data.username[i], this.data.password[i])

            cy.get("body").then($body => {
                
                if ($body.find("#menu_dashboard_index > b:nth-child(1)").length != 0) {
                    
                    cy.log('User logged in to the application successfully')
                    cy.get("#menu_dashboard_index > b:nth-child(1)").should('be.visible')
                    cy.orangeHrmLogout()

                }else{
                    
                    cy.log('Invalid credentials !! Please try again later')

                }

            })

        }
  
    })

  })
