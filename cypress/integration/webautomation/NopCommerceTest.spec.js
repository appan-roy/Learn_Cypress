//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('Nop Commerce Suite', function()
    {
        it('Verify the shopping cart amount', function()
            {
                //navigate to url
                cy.visit('https://demo.nopcommerce.com/')

                //search in the search box
                cy.get("#small-searchterms[name='q']").clear().type('Apple Macbook Pro 13-inch')

                //click on search button
                cy.get("[type='submit']").click()

                //click on add to cart button
                cy.get("[value='Add to cart']").click()

                //type quantity of the product in the text box
                cy.get("#product_enteredQuantity_4").clear().type('4')

                //click on add to cart button
                cy.get("#add-to-cart-button-4").click()

                cy.wait(5000)

                //click on shopping cart link
                cy.get("#topcartlink > a > span.cart-label").click()

                cy.wait(5000)

                //capture the product subtotal amount
                cy.get(".product-subtotal").contains('$7,200.00')
            }
        )
    }
)
