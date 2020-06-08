/// <reference types="cypress" />

describe('Navigate main menu items for selected affiliate', ()=>{
    beforeEach(()=>{
        cy.visit('https://stage.aftmda.org/login')
        cy.get('#email',{timeout:40000}).type('staff@aftdev.org{enter}')
        cy.get('#password').type('aftdev')
        cy.get('.btn-primary').click()
        //cy.get('.home-welcome > .v-expansion-panel > .v-expansion-panel-header > h4').should('contain.text','Welcome back')
   })

it('should login successfully', ()=>{
    cy.eyesOpen({
        appName: 'AFTConnect2.0',
        testName: 'Main Navigation Tests!',
        browser: { width: 1024, height: 768 },
      })
    // cy.get('#email',{timeout:40000}).type('staff@aftdev.org{enter}')
    // cy.get('#password').type('aftdev')
    // cy.get('.btn-primary').click()
    //cy.get('.home-welcome > .v-expansion-panel > .v-expansion-panel-header > h4').should('contain.text','Welcome back')
})
//@TODO to select global affiliate first
/*it('should select global affiliate',()=>{
    cy.get('.select-affiliate',{timeout:50000}).type('Volusia{enter}')
})*/

//Navigate to ILP
it('Verify that user can navigate to the individual listing page', ()=>{
    cy.eyesOpen({
        appName: 'AFTConnect2.0',
        testName: 'Individual Listing Page',
        browser: { width: 1024, height: 768 },
      });
    
      cy.get(':nth-child(1) > .v-btn__content > .menu-link',{timeout:40000}).click()
      
      cy.eyesCheckWindow()  
})

//Navigate to Units Lisiting Page
it('Verify that user can navigate to the Units listing page', ()=>{
    cy.eyesOpen({
        appName: 'AFTConnect2.0',
        testName: 'Units Listing Page',
        browser: { width: 1024, height: 768 },
      });
      
      cy.get(':nth-child(2) > .v-btn__content > .menu-link',{timeout:40000}).click()
        
      cy.eyesCheckWindow()
     
})

//Navigate to Employers Listing page 
it('Verify that user can navigate to the Employer listing page', ()=> {
    cy.eyesOpen({
        appName: 'AFTConnect2.0',
        testName: 'Employers Listing Page',
        browser: { width: 1024, height: 768 },
      });  
      
      cy.get(':nth-child(3) > .v-btn__content > .menu-link',{timeout:40000}).click()
        
      cy.eyesCheckWindow()
})

//Navigate to Affiliate record
it('Verify that a user can navigate to the Affiliate Record', ()=>{
    cy.eyesOpen({
        appName: 'AFTConnect2.0',
        testName: 'Affiliate Record Page',
        browser: { width: 1024, height: 768 },
      });

    cy.get(':nth-child(4) > .v-btn__content > .menu-link',{timeout:40000}).click()

    cy.eyesCheckWindow()
})

afterEach(()=>{
    cy.eyesClose()
})
})