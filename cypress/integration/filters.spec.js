/// <reference types="cypress" />

describe('Navigate main menu items for selected affiliate', ()=>{
    beforeEach(()=>{
        cy.visit('https://stage.aftmda.org/login')
        cy.get('#email',{timeout:40000}).type('staff@aftdev.org{enter}')
        cy.get('#password').type('aftdev')
        cy.get('.btn-primary').click()
   })
   
   it('Verify that user can filter by individual firstname',()=>{
    cy.eyesOpen({
        appName: 'AFTConnect2.0',
        testName: 'Individual List Filtering',
        browser: { width: 1024, height: 768 },
      });
    cy.get(':nth-child(1) > .v-btn__content > .menu-link').click()
    cy.get('#input-210').type('Roseanne')
    cy.get('.col-2 > .v-card--outlined > .v-form > .primary').click()
  //Validate firstname and lastname filter
    cy.get(':nth-child(1) > .v-btn__content > .menu-link').click()
    cy.get('#input-213').type('Allen')
    cy.get('.col-2 > .v-card--outlined > .v-form > .primary').click()
    cy.get('.col-2 > .v-card--outlined > .v-form > .default > .v-btn__content').click()
    //Filter by Email and EmployerID
    cy.get('#input-216').type('wslane@volusia.k12.fl.us')
    cy.get('#input-219').type ('920000000000')
    cy.get('.col-2 > .v-card--outlined > .v-form > .primary').click()

    cy.eyesCheckWindow('first name filter')
   })
   

  //  it.only('Verify that user can filter by individual lastname',()=>{
  //   cy.eyesOpen({
  //       appName: 'AFTConnect2.0',
  //       testName: 'Individual List Filtering',
  //       browser: { width: 1024, height: 768 },
  //     });
    // cy.get(':nth-child(1) > .v-btn__content > .menu-link').click()
    // cy.get('#input-213').type('Allen')
    //cy.get('.col-2 > .v-card--outlined > .v-form > .primary').click()
    //cy.get('.v-btn__content').click()
    //cy.get('').should('have.text','')
      
    //Validate lastname filter
   // cy.eyesCheckWindow('lastname filter')
  // })

  // cy.get('#input-216')

   afterEach(()=>{
    cy.eyesClose()
   })
  })