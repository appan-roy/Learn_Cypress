//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('CURA Healthcare Suite', function()
    {
        it('Verify appointment booking', function()
            {
                //navigate to url
                cy.visit('https://katalon-demo-cura.herokuapp.com/')

                //check current url is valid or not
                cy.url().should('include', 'herokuapp')

                //check whether make appointment button is visible and enabled or not
                cy.get("#btn-make-appointment").should('be.visible')

                //click on make appointment button
                cy.get("#btn-make-appointment").click()

                //check whether username textbox is visible and enabled or not
                cy.get("#txt-username").should('be.visible').should('be.enabled')

                //type the username in the username textbox
                cy.get("#txt-username").clear().type('John Doe')

                //check whether password textbox is visible and enabled or not
                cy.get("#txt-password").should('be.visible').should('be.enabled')

                //type the password in the password textbox
                cy.get("#txt-password").clear().type('ThisIsNotAPassword')

                //check whether login button is visible and enabled or not
                cy.get("#btn-login").should('be.visible').should('be.enabled')
                
                //click on login button
                cy.get("#btn-login").click()

                //verify page title
                cy.title().should('eq', 'CURA Healthcare Service')

                //verify whether the facility dropdown is visible and enabled or not
                cy.get("#combo_facility").select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center')
                
                //verify whether apply for hospital readmission is visible and enabled or not
                cy.get('#chk_hospotal_readmission').should('be.visible').should('not.be.checked')

                //check the hospital readmission checkbox
                cy.get('#chk_hospotal_readmission').check().should('have.value', 'Yes')

                //verify whether medicare radio button is visible and checked or not
                cy.get("#radio_program_medicare").should('be.visible').should('be.checked')

                //verify whether medicaid radio button is visible and checked or not
                cy.get("#radio_program_medicaid").should('be.visible').should('not.be.checked')

                //click on the medicaid radio button
                cy.get("#radio_program_medicaid").click()

                //check whether visit date textbox is visible and enabled or not
                cy.get("#txt_visit_date").should('be.visible').should('be.enabled')

                //type the visit date in the visit date textbox
                cy.get("#txt_visit_date").clear().type('05/09/2020')

                //check whether comment textbox is visible and enabled or not
                cy.get("#txt_visit_date").should('be.visible').should('be.enabled')

                //type the comment in the comment textbox
                cy.get("#txt_visit_date").clear().type('05/09/2020')

                //check whether book appointment button is visible and enabled or not
                cy.get("#btn-book-appointment").should('be.visible').should('be.enabled')
                
                //click on book appointment button
                cy.get("#btn-book-appointment").click()

                //verify appointment is booked successfully or not
                cy.get("#summary > div > div > div.col-xs-12.text-center > h2").contains('Appointment Confirmation')
            }
        )
    }
)
