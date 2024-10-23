describe('Service Unavailable Handling Suite', function()
    {
        it('Hubspot login page handling', function()
            {
                //navigate to url
                cy.visit("https://app.hubspot.com/login", {failOnStatusCode:false})     //service unavailable handling

                //type username
                cy.get("#username").clear().type('test@abc.com')
                
                //type password
                cy.get("#password").clear().type('test123')
            }
        )
    }
)
