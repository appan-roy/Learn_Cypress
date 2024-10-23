//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('Browser Page Handling Suite', function()
    {
        it('Page navigation back and forward', function()
            {
                //navigate to url
                cy.visit('https://demo.nopcommerce.com/')

                //verify home page title
                cy.title().should('eq', 'nopCommerce demo store')

                //click on register
                cy.get(".ico-register").click()

                //verify registration page title
                cy.title().should('eq', 'nopCommerce demo store. Register')

                //go back to home page
                cy.go('back')

                //verify home page title
                cy.title().should('eq', 'nopCommerce demo store')

                //go forward to registration page
                cy.go('forward')

                //verify registration page title
                cy.title().should('eq', 'nopCommerce demo store. Register')

                //go back to home page
                cy.go(-1)

                //verify home page title
                cy.title().should('eq', 'nopCommerce demo store')

                //go forward to registration page
                cy.go(1)

                //verify registration page title
                cy.title().should('eq', 'nopCommerce demo store. Register')
            }
        )

        it('Page refresh', function()
            {
                //refresh the web page
                cy.reload()
            }
        )
    }
)
