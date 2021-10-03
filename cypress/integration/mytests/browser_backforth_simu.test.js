describe("Back and Forward Button simulation in Cypress", () => {

    it("Back forward test", () => {
        cy.visit("https://www.freshworks.com",{failOnStatusCode: false})
        cy.contains('Customers').click()
        cy.url().should('include','/customers') //chai Query asssertion
        cy.go('back',{timeout:60000})
        //similar to cy.go(-1,,{timeout:60000})
        cy.wait(200)
        cy.go('forward',{timeout:60000})
        //similar to cy.go(1,{timeout:60000})
    })

    it( "Back forward test for Google",() => {
        cy.visit("https://www.google.com",{failOnStatusCode: false})
        cy.go('back',{timeout:20000}) //same  as cy.go(-1)
        cy.wait(200)
        cy.go('forward',{timeout:20000}) //same  as cy.go(1)
    })


})