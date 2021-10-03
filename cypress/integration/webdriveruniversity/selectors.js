describe("Selector examples", () => {
    //it.only runs that single test case only.
    it("Examples of Selectors via Web University Contacts page ", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html") 
        //click on remote URL
        //By tagName
        cy.get("input")
        //By css selector
        cy.get("input[name='first_name']")
        //By id
        cy.get("#contact_me")
        //By class
        cy.get(".feedback-input")
        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")
        //By two different attributes
        cy.get("[name='email'][placeholder='Email Address']")
        //By xpath
        cy.xpath("//input[@name='first_name']")

    })
})