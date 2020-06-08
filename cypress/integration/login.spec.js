/// <reference types="cypress" />

describe('Verify that a user can login', () => {
    beforeEach(() =>{
        cy.visit('https://stage.aftmda.org/login')
    })

    it('should login without an error', () => {

        cy.eyesOpen({
            appName: 'AFTConnect2.0',
            testName: 'Log in Functional Tests!',
            browser: { width: 1024, height: 768 },
          });

        cy.get('#email',{timeout:40000}).type('staff@aftdev.org{enter}')
        cy.get('#password').type('aftdev')
        cy.get('.btn-primary').click()
        cy.get('.home-welcome > .v-expansion-panel > .v-expansion-panel-header > h4')

        cy.eyesCheckWindow('LogIn')     
     
})

it('should invalid user cannot login', () => {
    cy.eyesOpen({
        appName: 'AFTConnect2.0',
        testName: 'Log in Functional Tests!',
        browser: { width: 1024, height: 768 },
      });

    cy.get('#email',{timeout:40000}).type('brittany@aftdev.org{enter}')
    cy.get('#password').type('aftdev')
    cy.get('.btn-primary').click()
    cy.get('strong').should('have.text', 'These credentials do not match our records.')

    cy.eyesCheckWindow('InvalidLogIn')   
})

afterEach(()=>{
    cy.eyesClose()
})

})

