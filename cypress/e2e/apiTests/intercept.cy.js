/// <reference types="Cypress" />
import '../../support/e2e';

const dataJson = require('../../fixtures/example')

context('Perform Test', () => {
    
    describe('Perform test', ()=>{
        
        // it('test api with simple intercept',()=>{
        //         cy.visit("https://jsonplaceholder.typicode.com/")

        //         cy.intercept({

        //             path: '/posts'

        //         }).as('posts')

        //         cy.get("table:nth-of-type(1) a[href='/posts']").click()

        //         cy.wait('@posts').then(inter=>{
        //             cy.log(JSON.stringify(inter))
        //             console.log(JSON.stringify(inter))

        //         })


                
        // })

        beforeEach(() => {

            cy.visit("https://jsonplaceholder.typicode.com")
            
          
          })


        it('mock with intercept test',()=>{


            // cy.visit("https://jsonplaceholder.typicode.com")

            cy.intercept('GET','/posts',{totalpost:5}).as('posts').as("posts")

            cy.get("table:nth-of-type(1) a[href='/posts']").click()

            cy.wait('@posts')

        })




})

})
