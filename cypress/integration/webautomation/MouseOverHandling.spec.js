describe('Mouse Over Suite', ()=>{
    it('Spicejet Sign Up', ()=>{
        //navigate to url
        cy.visit("https://www.spicejet.com/")

        //mouse over login / signup
        cy.contains('Login / Signup').should('be.visible').trigger('mouseover')

        //mouse over spiceclub members
        cy.contains('SpiceClub Members').should('be.visible').trigger('mouseover')

        //click on sign up
        cy.contains('Sign up').click({force:true})
    })

    it('Spicejet Member Login', ()=>{
        //mouse over login / signup
        cy.contains('Login / Signup').should('be.visible').trigger('mouseover')

        //mouse over spiceclub members
        cy.contains('SpiceClub Members').should('be.visible').trigger('mouseover')

        //click on member login
        cy.contains('Member Login').click({force:true})
    })

    it('Shopping Cart', ()=>{
        //navigate to url
        cy.visit("http://automationpractice.com/index.php")

        //click on first element add to cart
        cy.get(".ajax_add_to_cart_button").first().click()

        //close the popup
        cy.get(".cross").click()

        //show the cart block
        cy.get(".cart_block").should('be.hidden').invoke('show')

        //click on checkout
        cy.get("#button_order_cart").click()

        //verify the url
        cy.url().should('include', 'controller=order')
    })
})