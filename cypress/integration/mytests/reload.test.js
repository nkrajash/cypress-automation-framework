describe("Reload a page in Cypress", () => {

    it( "Reload test for freshworks",() => {
        cy.visit("https://www.freshworks.com",{failOnStatusCode: false})
        cy.contains('Customers').click()
        cy.url().should('include','/customers') //chai Query asssertion
        cy.reload(true,{timeOut:80000}).contains('customers').should("be.visible")
         //forceful reload
    })

})
