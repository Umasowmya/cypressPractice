/// <reference types="Cypress" />
import '../../support/e2e';

context('Perform Test', () => {
    
    describe('Perform test', ()=>{
        it('get book details',()=>{

                cy.request({

                    method : 'GET',
                    url : 'https://api.todoist.com/rest/v1/labels/2161290090',
                    headers: {

                        'authorization': "Bearer 83b75e918c4dd472ee104061b9c29d1d6fa41988"
                    }

                  }).then((res)=>{
                        expect(res.status).to.eq(200);
                        
                 })


        })

})

})
