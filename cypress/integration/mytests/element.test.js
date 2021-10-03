describe( 'Launch my freshworks app',() => {

    it("app testing ", () => {
        cy.visit("https://www.freshworks.com/",{failOnStatusCode: false}) //login to URL
        //Handle Service Unavailable
        cy.contains("Customers")
        cy.contains("Customers").click()
        cy.url().should('include','/customers') //chai Query asssertion
    })

    it("app - element get testing ", () => {
        cy.visit("https://www.freshworks.com/",{failOnStatusCode: false}) //login to URL
        cy.get(".col-md-6.mobile-center-desktop-left-align.pb-lg.banner-text-content.small-banner")
        .should("be.visible")
        .and("contain","Delight")
        .and("have.length",1)
        cy.get(".footer-nav > li").should("have.length",26)
        cy.get(".footer-nav > li").find("a[href*='footer']").should("have.length",5)
    })

})