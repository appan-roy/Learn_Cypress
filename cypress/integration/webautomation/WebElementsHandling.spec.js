//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('Web Elements Handling Suite', function()
    {
        it('Full Name textbox', function()
            {
                //navigate to url
                cy.visit('http://demo.automationtesting.in/Register.html')
                
                //check whether first name textbox is visible and enabled or not
                cy.get(":nth-child(1) > :nth-child(2) > .form-control").should('be.visible').should('be.enabled')

                //type the first name in the first name textbox
                cy.get(":nth-child(1) > :nth-child(2) > .form-control").clear().type('John')

                //check whether last name textbox is visible and enabled or not
                cy.get(":nth-child(1) > :nth-child(3) > .form-control").should('be.visible').should('be.enabled')

                //type the last name in the last name textbox
                cy.get(":nth-child(1) > :nth-child(3) > .form-control").clear().type('Doe')
            }
        )

        it('Gender radio button', function()
            {
                //verify male radio button is visible and not checked
                cy.get("#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(1) > input").should('be.visible').should('not.be.checked')

                //click on the male radio button
                cy.get("#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(1) > input").click()
            }
        )
        
        it('Hobbies checkbox', function()
            {
                //select all the checkboxes
                cy.get("#checkbox1").check().should('be.checked').and('have.value', 'Cricket')
                cy.get("#checkbox2").check().should('be.checked').and('have.value', 'Movies')
                cy.get("#checkbox3").check().should('be.checked').and('have.value', 'Hockey')

                //deselect all the checkboxes
                cy.get("#checkbox1").uncheck().should('not.be.checked')
                cy.get("#checkbox2").uncheck().should('not.be.checked')
                cy.get("#checkbox3").uncheck().should('not.be.checked')

                //select two specific checkboxes at a time
                cy.get("input[type='checkbox']").check(['Cricket', 'Hockey'])
            }
        )

        it('Skills dropdown', function()
            {
               //select skills
               cy.get("#Skills").select('Javascript').should('have.value', 'Javascript')
            }
        )
        
        it('Languages multi select dropdown', function()
            {
               //select languages
               cy.get("#msdd").click()
               cy.get(".ui-corner-all").contains('English').click()
               cy.get(".ui-corner-all").contains('Japanese').click()
            }
        )

        it('Select country searchable dropdown', function()
            {
               //select country
               cy.get("[role='combobox']").click({force:true})  //forceful click if the element is covered by any other element
               cy.get(".select2-search__field").type('Ind')
               cy.get(".select2-search__field").type('{enter}') //key press enter
            }
        )

        it('Elements handling using get() and find() methods', ()=>{
            //navigate to url
            cy.visit("https://www.freshworks.com/")
    
            //click on platform
            cy.contains('Platform').click()
    
            //assert url contains platform
            cy.url().should('include', '/platform')
    
            //assert our platform is present and has length 1
            cy.get("div.align-center.mb-lg h1:nth-of-type(2)")
            .should('be.visible')
            .and('contain', 'Our platform')
            .and('have.length', 1)
    
            //get footer links count and assert
            cy.get("ul.footer-nav li").should('have.length', 34)
    
            //get footer links count with a tag and text footer in href attribute and assert
            cy.get("ul.footer-nav li")
            .find("a[href*='footer']")
            .should('have.length', 12)
        })
    
        it('Elements handling using get() and within() methods', ()=>{
            //navigate to url
            cy.visit("https://www.amazon.com/")
    
            //get the searchbox under a parent element and type into it
            cy.get(".nav-search-field ").within(()=>{
                cy.get("input#twotabsearchtextbox").type('Apple Macbook')
            })
        })
    }
)
