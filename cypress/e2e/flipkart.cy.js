///<reference types="cypress"/>


describe('validate the menu items', () => {
    beforeEach(() => {
        cy.visit('https://www.flipkart.com/')


    })
    xit('validate the selection of mobile item', () => {
        cy.get('.YBLJE4').each(($el) => {
            const menuItem = $el.text().trim()
            cy.log(menuItem)
            if (menuItem === 'Mobiles') {
                cy.wrap($el).click()
            }
        })
    })

    xit('validate the total product images', () => {
        cy.get('._25HC_u').then((product) => {
            let countofProduct = product.length
            cy.log(countofProduct)
        })
    })

    xit('validate the list of item in electronic menu', () => {
        cy.get('._27h2j1').eq(1).click()
        cy.get('._1BJVlg').each(($el) => {
            const electronicMenuItems = $el.text()
            cy.log(electronicMenuItems)
        })
    })

    // it('validate the job id in the career page',()=>{
    //     // cy.get('.HlWMPX').contains('Careers').click()
    //     cy.get('.HlWMPX').each(($el)=>{
    //         if($el.text()==='Careers'){
    //             let newUrl= $el.prop('href')
    //             newUrl= newUrl.split('/?')
    //             let careerUrl=newUrl[0]
    //             cy.log(careerUrl); 
    //             // cy.visit(careerUrl)  
    //             cy.origin('https://www.flipkartcareers.com', () => { 
    //                 cy.on('uncaught:exception', (e) => {
    //                      if (e.message.includes('Things went bad')) { // we expected this error, so let's ignore it // and let the test continue 
    //             return false

    //             } 
    //             }) 
    //         }) 
    //         cy.visit('https://www.flipkartcareers.com/?otracker=footer_navlinks')



    //         }
    //     })
    // })

    // it('test',()=>{
    //     cy.visit('https://www.flipkart.com/')
    //     // cy.get('a').contains('Careers').then(($link) => {
    //     //   const careerUrl = $link.prop('href');
    //     //   const baseDomain = new URL(careerUrl).origin;
    //     //   cy.log(careerUrl)
    //     //   cy.visit(baseDomain)

    //       cy.origin('https://www.flipkartcareers.com/', () => {
    //         cy.visit('/?otracker=footer_navlinks#!/');
    //       });
    //     });
    // })

    // it('navigates to Flipkart Careers safely', () => {
    //     cy.visit('https://www.flipkart.com');

    //     cy.get('a').contains('Careers').then(($link) => {
    //       const careerUrl = $link.prop('href'); // full link to careers

    //       cy.origin('https://www.flipkartcareers.com', { args: { careerUrl } }, ({ careerUrl }) => {
    //         cy.visit(careerUrl);
    //         // cy.contains('Open Roles').should('exist');
    //       });
    //     });
    //   });

    it('test1', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('._1ZMrY_').scrollIntoView()
        cy.get('body').then(($body) => {
            if ($body.find('.JFPqaw').length > 0) {
                cy.get('._30XB9F').click();
            } else {
                cy.log('Element not found: ._30XB9F');
            }
        });
        // cy.get('a').contains('Careers').then(() => {
            // const newUrl=$link.prop('href')
            // cy.visit(newUrl,{timeout:2000})
            // cy.get('a').contains('Careers').click()t
            cy.origin('https://corporate.flipkart.net', () => {
                // cy.on('uncaught:exception', (e) => {
                //   if (e.message.includes('Things went bad')) {
                //     // we expected this error, so let's ignore it
                //     // and let the test continue
                //     return false
                //   }
            // })
            cy.visit('/ethics')
        })
     

    // })


})
})

// })