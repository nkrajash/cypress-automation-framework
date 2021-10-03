describe("Cypress web security", () => {
    //it.only runs that single test case only.
    it("Validate visiting 2 different domains", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        cy.visit("https://www.automationteststore.com") //click on another domain
    })

    it("Validate visiting 2 different domains via user actions",()=> {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        cy.get("#automation-test-store").invoke('removeAttr','target').click()
    })
})
