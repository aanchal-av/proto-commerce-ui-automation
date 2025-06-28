/// <reference types="cypress" />

import LoginPage from "../support/pageObjects/LoginPage"
import CheckoutPage from "../support/pageObjects/CheckoutPage"

describe('placing order', () => {
  const loginpage=new LoginPage()
  const checkoutpage= new CheckoutPage()


  

  beforeEach(function(){
    // runs once before all test in this block
    cy.fixture('users.json').as('data')
    loginpage.goTo(Cypress.env('url'))
  })


it('Add product to cart', function() {
    const productName='iphone X'
    loginpage.login(this.data.username,this.data.password)
    checkoutpage.productCard({timeout:5000})
    checkoutpage.clickAddToCart(productName)
    cy.get('app-card').eq(2).click()
    cy.contains('a','Checkout').click()
    checkoutpage.sumofProducts()  
  })

it('place an order',function(){
    const productName='iphone X'
    loginpage.login(this.data.username,this.data.password)
    checkoutpage.clickAddToCart(productName)
      cy.get('app-card').eq(1).click()
      cy.contains('a','Checkout').click()
      cy.contains('button','Checkout').click()
      cy.submitFormDetails()
      cy.get('.alert').should('contain',' Thank you! Your order will be delivered in next few weeks :-)')

})

})