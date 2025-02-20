import LoginPage from '../support/pageObjects/LoginPage';


describe('Login page validation', () => {
  beforeEach(function(){
    // runs once before all test in this block
    cy.fixture('users').then((data) => {
      this.data = data;
    });
  })

  it('user is able to login', function(){
    const loginpage = new LoginPage()
    const pageTitle= 'Shop Name'
    loginpage.goTo('https://rahulshettyacademy.com/loginpagePractise/')
    loginpage.login(this.data.username,this.data.password)
    loginpage.productPageTitle(pageTitle)
  })

  
  })
