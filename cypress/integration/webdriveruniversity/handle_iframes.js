describe("Handling Iframe and Modals", () => {
    //it.only runs that single test case only.
    it("Handle WebDriver Iframe and Modals", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Contact-Us/contactus.html" target="_blank" id="contact-us">
        cy.get("#iframe").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("#frame").then( $iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get("@modal").should( ($expRes) => {
            const txt = $expRes.text()
            //cy.wrap(body).as('iframe')
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        })
        cy.get('@modal').contains('Close').click()


    });
})