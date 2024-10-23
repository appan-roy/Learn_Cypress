//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

class HomePage{
    clickOnWelcomeLink(){
        const welcome = cy.get("#welcome")
        welcome.click()
    }

    clickOnLogoutLink(){
        const logout = cy.get("#welcome-menu > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)")
        logout.click()
    }
}

export default HomePage
