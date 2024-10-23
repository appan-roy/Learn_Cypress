//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'

describe('Page Object Model Suite', function()
    {
        before(function() {
            cy.fixture('testdata').then(function(data){
                this.data = data
            })        
        })

        beforeEach(function() {
            //using custom command for launching application
            cy.orangeHrmStartApp(this.data.url)
            
            //create login page object
            const lPage = new LoginPage()

            //type username
            lPage.typeUsername(this.data.username)

            //type password
            lPage.typePassword(this.data.password)

            //click on login button
            lPage.clickOnLoginButton()
        })

        afterEach(function() {
            //create home page object
            const hPage = new HomePage()

            //click on welcome link
            hPage.clickOnWelcomeLink()

            //click on logout link
            hPage.clickOnLogoutLink()
        })
        
        it('Orange HRM Login Test', function()
            {
                //verify dashboard tab is present
                cy.get("#menu_dashboard_index > b:nth-child(1)").should('be.visible')
            }
        )
    }
)
