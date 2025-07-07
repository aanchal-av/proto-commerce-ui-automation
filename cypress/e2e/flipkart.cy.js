///<reference types="cypress"/>

beforeEach(()=>{
    cy.visit('https://www.flipkart.com/')
})
describe('validate the menu items',()=>{
    it('validate the selection of mobile item',()=>{
        cy.get('.YBLJE4').each(($el)=>{
                 const menuItem=$el.text().trim()
                 cy.log(menuItem)
                   if(menuItem==='Mobiles'){
              cy.wrap($el).click()
                    }
        })
    })
})
