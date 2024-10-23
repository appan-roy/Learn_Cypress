//Add the reference for automatic suggestions for cypress methods
//Use this --> [/// <reference types="cypress" />] Or [/// <reference types="Cypress" />]
/// <reference types="cypress" />

describe('Web Table Handling Suite', function()
    {
        it('Verify the subject Javascript present in the table', function()
            {
                //navigate to url
                cy.visit('http://testautomationpractice.blogspot.com/')
                
                //check presence of a value anywhere in the table
                cy.get("table[name='BookTable']").contains('td', 'Javascript').should('be.visible')
            }
        )

        it('Verify the book name Learn JS present in the 4th row and 1st column in the table', function()
            {          
                //check presence of a value in the specific row and column
                cy.get("table[name='BookTable'] > tbody > tr:nth-child(4) > td:nth-child(1)")
                .contains('Learn JS').should('be.visible')
            }
        )

        it('Verify the price of the book Master In JS is 1000', function()
            {          
                //check the price of the book Master In JS is 1000
                cy.get("table[name='BookTable'] > tbody > tr td:nth-child(1)").each(($element, index, $list) => {
                        const bookName = $element.text()
                        if(bookName.includes('Master In JS')){
                            cy.get("table[name='BookTable'] > tbody > tr td:nth-child(4)").eq(index).then(function(price){
                                    const bookPrice =  price.text()
                                    expect(bookPrice).to.equal('1000')
                                }
                            )
                        }
                    }
                )
            }
        )
    }
)
