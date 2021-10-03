describe("Automation Practice Features testing", () => {

    before(() => {
        cy.visit("http://www.automationpractice.com/index.php",{failOnStatusCode: false})
        cy.login("rnavinkmr45.12@gmail.com","Naveen@12345")
    })


    it("Should login", () => {
        cy.url().should("include","controller=my-account")
        cy.get(".myaccount-link-list a").should("have.length",5)
    })

    it("Should navigate to home page", () => {
        cy.get(".icon-chevron-left").last().click().url().should('include','index.php')
    })

    it("Should search", () => {
        cy.search('Dress')
        cy.get('.lighter').should('contain.text','Dress')
    })

})