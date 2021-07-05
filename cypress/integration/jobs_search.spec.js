/// <reference types="cypress" />

context('Jobs Search', () => {
  beforeEach(() => {
    // browser with a 1080p monitor, site elements look clutered on smaller screen sizes
    cy.viewport(1920, 1080)
    cy.visit('/')
  })

  it('verify search results', () => {
    cy.get("a[href$='/jobs/care/']").first().click()
    cy.get('h2').should('have.text', "We're Hiring!")
    // Scrolling into view as sometimes websites have cookie banners/modal that are blocking the button
    cy.get('#searchLocation').scrollIntoView()
    cy.get('#searchLocation').type('Manchester')
    // wait for button to be enabled before clicking
    cy.get('[type="submit"]',).should('be.enabled')
    cy.get('[type="submit"]').click()
    cy.get('.results').within(() => {
      // Task 2.1 Fix broken test:
      // Changed 'have.text' to 'contain.text' as the test text returned contains '\n'
      // but we just want to know if 'Manchester' is included in string, 
      // Get the job location selector for better results
        cy.get('.job-location').should('include.text','Manchester')
    })
  })

  // Task 2.2 Negative scenario
  // Currently search job name and location allow the following invalid inputs:
  // numbers, special characters, international characters (including unicode emojis)
  // No validation messages are shown
  // system does pickup any input that might look luke a HTML markup or script e.g. <London> and shows 500 error page
  it('negative scenario', () => {
    cy.get("a[href$='/jobs/care/']").first().click()
    cy.get('h2').should('have.text', "We're Hiring!")
    // Search job name using an email as input
    cy.get('input#searchExpression').scrollIntoView()
    cy.get('input#searchExpression').type('test@gmail.com')
    // wait for button to be enabled before clicking
    cy.get('[type="submit"]',).should('be.enabled')
    cy.get('[type="submit"]').click()
    // The system should not accept these inputs but the results list is populated regardless
    cy.get('.results-count').should('include.text', 'you might be interested in' )

    
    // Search location by entering a number
    // Clear both fields
    cy.get('input#searchExpression').clear()
    cy.get('#searchLocation').clear()
    cy.get('#searchLocation').type('6')
    // wait for button to be enabled before clicking
    cy.get('[type="submit"]',).should('be.enabled')
    cy.get('[type="submit"]').click()
    // System doesn't show any results when location contains an invalid input but search is still carried out
    cy.get('.results-count').should('include.text', "We didn't find any jobs that matched your criteria")
  })
})