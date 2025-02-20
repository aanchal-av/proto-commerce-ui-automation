import LoginPage from '../support/pageObjects/LoginPage';

describe('Login page validation', () => {
  const loginpage = new LoginPage()
  beforeEach(function(){
    // runs once before all test in this block
    cy.fixture('users').then((data) => {
      this.data = data;
    });

    loginpage.goTo(Cypress.env('url'))

  })

  it('user is able to login @smoke', function(){
    const pageTitle= 'Shop Name'
    loginpage.login(this.data.username,this.data.password)
    loginpage.productPageTitle(pageTitle)
  })

  
  })
