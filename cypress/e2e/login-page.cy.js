describe('Login page validation', () => {

  it('user is able to login', () => {
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
    cy.get('#username').type('rahulshettyacademy')
    cy.get('#password').type('learning')
    cy.get('#terms').check()
    cy.get('#signInBtn').click()
    cy.get('.my-4').should('contain','Shop Name')
  })

  it('Add product to cart', () => {
    const productName='iphone X'
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
    cy.contains('a','Checkout').click()


  })
})