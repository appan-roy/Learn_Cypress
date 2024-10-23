/************************************ External Libraries ************************************/
import 'cypress-file-upload';   //for file upload feature

/************************************* Custom Keywords *******************************************/

//Orange HRM Start Application
Cypress.Commands.add("orangeHrmStartApp", (url) => {
    //Navigate to URL
    cy.visit(url)
})

//Orange HRM Login
Cypress.Commands.add("orangeHrmLogin", (username, password) => {
    //enter username
    cy.get("#txtUsername").clear().type(username)

    //enter password
    cy.get("#txtPassword").clear().type(password)

    //click on login
    cy.get("#btnLogin").click()
})

//Orange HRM Logout
Cypress.Commands.add("orangeHrmLogout", () => {
    //click on welcome link
    cy.get("#welcome").click()

    //click on logout link
    cy.get("#welcome-menu > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").click()
})
