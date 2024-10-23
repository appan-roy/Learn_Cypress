//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

class LoginPage{
    typeUsername(uname){
        const usr = cy.get("#txtUsername")
        usr.clear()
        usr.type(uname)
        return this
    }

    typePassword(pwrd){
        const pwd = cy.get("#txtPassword")
        pwd.clear()
        pwd.type(pwrd)
        return this
    }

    clickOnLoginButton(){
        const loginBtn = cy.get("#btnLogin")
        loginBtn.click()
    }
}

export default LoginPage
