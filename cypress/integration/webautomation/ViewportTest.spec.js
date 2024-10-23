/// <reference types="cypress" />

describe('View Ports Suite', ()=>{
    before(()=>{
        cy.log("Test started")
    })

    beforeEach(()=>{
        cy.visit("https://www.google.co.in")
    })

    after(()=>{
        cy.log("Test ended")
    })

    it('Open in macbook-15', ()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        
    })

    it('Open in iphone-x', ()=>{
        cy.viewport('iphone-x')
        cy.screenshot()
        
    })

    it('Open in samsung-s10', ()=>{
        cy.viewport('samsung-s10')
        cy.screenshot()
        
    })

    it('Open in 550px x 750px', ()=>{
        cy.viewport(550, 750)
        cy.screenshot()
        
    })
})