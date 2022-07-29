/// <reference types="Cypress" />
import '../../support/e2e';



const user = {
    getName: (arg) => {
      return arg
    },
  
    updateEmail: (arg) => {
      return arg
    },
  
    fail: () => {
      throw new Error('fail whale')
    },
  }
  
  it('test stube,spy',()=>{
  // force user.getName() to return "Jane"
  cy.stub(user, 'getName').returns('Jane Lane')
  
  // spy on updateEmail but do not change its behavior
  cy.spy(user, 'updateEmail')
  
  // spy on fail but do not change its behavior
  cy.spy(user, 'fail')
  
  // invoke getName
  const name = user.getName(123)
  
  // invoke updateEmail
  const email = user.updateEmail('jane@devs.com')
  
  try {
    // invoke fail
    user.fail()
  } catch (e) {}
  
//   expect(name).to.eq('Jane Lane') // true
  expect(user.getName).to.be.calledOnce // true
  expect(user.getName).not.to.be.calledTwice // true
  expect(user.getName).to.be.calledWith(123)
  expect(user.getName).to.be.calledWithExactly(123) // true
  expect(user.getName).to.be.calledOn(user) // true
  
  expect(email).to.eq('jane@devs.com') // true
  expect(user.updateEmail).to.be.calledWith('jane@devs.com') // true
  expect(user.updateEmail).to.have.returned('jane@devs.com') // true
  
  expect(user.fail).to.have.thrown('Error') // true

})