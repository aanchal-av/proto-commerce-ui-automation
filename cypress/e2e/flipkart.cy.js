///<reference types="cypress"/>


describe('validate the menu items',()=>{
    beforeEach(()=>{
        cy.visit('https://www.flipkart.com/')
    })
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
