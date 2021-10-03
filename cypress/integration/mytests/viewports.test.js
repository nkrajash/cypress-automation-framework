describe("test different view ports- Control the size and orientation of the screen for your application", ()=> {
    //viewportWidth and viewportHeight can be changed  in the configuration
    before(() => {
        console.log("Before running my tests")
    })

    beforeEach(() => {
        cy.visit("https://www.google.com")
    })

    it("open in macbook-13", () => {
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(20)
    })

    it("open in macbook-15", () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(20)
    })

    it("open in iphone-x", () => {
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(20)
    })

    it("open in 550,750", () => {
        cy.viewport(550,750) // Set viewport to 550px x 750px
        cy.screenshot()
        cy.wait(20)
    })

    it("open in ipad-2", () => {
        cy.viewport('ipad-2')
        cy.screenshot()
        cy.wait(20)
    })

})