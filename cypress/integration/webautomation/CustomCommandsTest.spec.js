//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('Orange HRM Custom Commands Suite', function() {
    
    before(function() {
        cy.fixture('testdata').then(function(data){
            this.data = data
        })        
    })

    beforeEach(function() {
        cy.orangeHrmStartApp(this.data.url)
        cy.orangeHrmLogin(this.data.username, this.data.password)
    })

    afterEach(function() {
        cy.orangeHrmLogout()
    })

    it('Verify dashboard tab is present', function() {
        //check dashboard is present in the home page
        cy.get("#menu_dashboard_index > b:nth-child(1)").should('be.visible')
    })

  })
