describe("Validate WebDriverUni HomePage links", () => {
    //it.only runs that single test case only.
    it("Confirm links redirect to the correct pages ", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL

        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true}) 

        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.        
        cy.url().should('include', 'contactus')
        //Navigate back or forward to previous or nect in the browser's URL History.
        cy.go('back') //navigate to home page
        cy.url().should('include', "https://www.webdriveruniversity.com")
        cy.reload() //reload the contact-us page
        //cy.reload(true)//reload wuthout using cache
        cy.go('forward') //back to contact-us page
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.get("#login-portal").invoke('removeAttr','target').click({force:true}) 
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        cy.get("#to-do-list").invoke('removeAttr','target').click({force:true}) 
        cy.url().should('include', 'To-Do-List')
        cy.go('back')

    });

})