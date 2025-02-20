class CheckoutPage{

    clickAddToCart(productName){
        cy.get('app-card').filter(`:contains("${productName}")`).then($el=>{
            cy.wrap($el).should('have.length', 1)
            cy.wrap($el).contains('button','Add').click()
      
          })
    }

    productCard(){
        cy.get('app-card').should('have.length',4)
    }

 
        
    clickSecondProduct(){{
        cy.get('app-card').eq(2).click()
    }
    }

    sumofProducts(){
        let sum =0
        cy.get('tr td:nth-child(4) strong').each(($el)=>{
      
            const price=Number($el.text().split(" ")[1].trim())
            sum = sum + price
          }).then(function(){
            expect(sum).to.be.lessThan(200000)
    })


}
}
export default CheckoutPage;