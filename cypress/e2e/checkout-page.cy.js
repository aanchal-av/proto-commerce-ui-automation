/// <reference types="Cypress" />

describe('Login page validation', () => {


it('Add product to cart', () => {
    const productName='iphone X'
    let sum = 0
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
    cy.get('#username').type('rahulshettyacademy')
    cy.get('#password').type('learning')
    cy.get('#terms').check()
    cy.get('#signInBtn').click()
    cy.get('app-card').should('have.length',4)
    cy.get('app-card').filter(`:contains("${productName}")`).then($el=>{
      cy.wrap($el).should('have.length', 1)
      cy.wrap($el).contains('button','Add').click()

    })
    cy.get('app-card').eq(1).click()
    cy.contains('a','Checkout').click()
    cy.get('tr td:nth-child(4) strong').each(($el)=>{
      
      const price=Number($el.text().split(" ")[1].trim())
      sum = sum + price
    }).then(()=>{
      expect(sum).to.be.lessThan(200000)
    })
  })

it('place an order',()=>{
    const productName='iphone X'
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
    cy.get('#username').type('rahulshettyacademy')
    cy.get('#password').type('learning')
    cy.get('#terms').check()
    cy.get('#signInBtn').click()
    cy.get('app-card').filter(`:contains("${productName}")`).then($el=>{
        cy.wrap($el).should('have.length', 1)
        cy.wrap($el).contains('button','Add').click()
      })
      cy.get('app-card').eq(1).click()
      cy.contains('a','Checkout').click()
      cy.contains('button','Checkout').click()
      cy.get('#country').type('India')
       
      cy.get('.suggestions ul li a',{timeout:20000}).click()
      cy.get('.btn-success').click() 
      cy.get('.alert').should('contain',' Thank you! Your order will be delivered in next few weeks :-)')

})
})