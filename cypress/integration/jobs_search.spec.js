/// <reference types="cypress" />

context('Jobs Search', () => {
    beforeEach(() => {
      cy.visit('/')
      //Have moved lines 7 and 8 from 'it' statement to 'beforeEach' to avoid duplication as both scenarios have same steps 
      cy.get("a[href$='/jobs/care/']").first().click()
      cy.get('h2').should('have.text', "We're Hiring!")
    })
  
   it('verify search results', () => {
      cy.get('#searchExpression').type('Field Care Supervisor')   //Added new command to enter job name    
      cy.get('#searchLocation').type('staffordshire')
      cy.get('[type="submit"]').click()
      cy.get('.results').within(() => {
      cy.get('div').first().should('include.text',"Staffordshire & Stoke") //Changed 'have.text' to 'include.text' and also changed the location to verify multiple locations as per the first tip from instructions
      })
    })

    //Added a negative scenario to validate search location with special characters
   it('verify search location with spl char ', () => {
      cy.get('#searchLocation').type('!@£$%^&*()')
      cy.get('[type="submit"]').click()
      cy.get('.results-count').should('include.text',"We didn't find any jobs that matched your criteria, check your address or expand the search range.")
    })
})
