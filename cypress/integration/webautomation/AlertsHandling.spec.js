//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('Alerts Handling Suite', function()
    {
        it('Alert OK', function()
            {
                //navigate to url
                cy.visit('http://demo.automationtesting.in/Alerts.html')

                //click on alert with ok segment
                cy.get("ul.nav-tabs > li:nth-child(1) > a:nth-child(1)").click()

                //click on the button
                cy.get(".btn-danger").click()

                //to verify alert message, raise an event
                cy.on('window:alert', (strMessage) =>{
                        expect(strMessage).to.equal('I am an alert box!')
                    }
                )
            }
        )

        it('Alert OK Cancel', function()
            {
                //click on alert with ok & cancel segment
                cy.get("ul.nav-tabs > li:nth-child(2) > a:nth-child(1)").click()

                //click on the button
                cy.get(".btn-primary").click()

                //to verify alert message, raise an event
                cy.on('window:confirm', (strMessage) =>{
                        expect(strMessage).to.equal('Press a Button !')
                    }
                )
            }
        )
    }
)
