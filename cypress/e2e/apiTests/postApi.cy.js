/// <reference types="Cypress" />
import '../../support/e2e';

const dataJson = require('../../fixtures/example')

context('Perform Test', () => {
    
    describe('Perform test', ()=>{
        it('post book',()=>{

                cy.request({

                    method : 'POST',
                    url : 'https://api.todoist.com/rest/v1/labels',
                    headers: {

                        'authorization': "Bearer 83b75e918c4dd472ee104061b9c29d1d6fa41988"
                    },
                    body:{

                        "name": dataJson.name
                    }

                  }).then((res)=>{
                        expect(res.status).to.be.eq(200);
                        expect(res.body.name).to.be.eq(dataJson.name)
                        
                 }).then((res)=>{

                    const labelId = res.body.id;

                    cy.request({

                        method:'GET',
                        url:'https://api.todoist.com/rest/v1/labels/'+labelId,

                        headers:{
                            'authorization': "Bearer 83b75e918c4dd472ee104061b9c29d1d6fa41988"
                        }

                    }).then((response)=>{
                        expect(response.status).to.be.eq(200);
                        expect(response.body.name).to.eq(dataJson.name);
                    })

                 })





        })

})

})
