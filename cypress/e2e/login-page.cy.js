describe('Login page validation', () => {

  it('user is able to login', () => {
    cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
    cy.get('#username').type('rahulshettyacademy')
    cy.get('#password').type('learning')
    cy.get('#terms').check()
    cy.get('#signInBtn').click()
    cy.get('.my-4').should('contain','Shop Name')
  })

  
  })