//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('Orange HRM Login Suite', function() {

    beforeEach(function() {
        //Navigate to URL
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        //enter username
        cy.get("#txtUsername").clear().type('Admin')

        //enter password
        cy.get("#txtPassword").clear().type('admin123')

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
