describe("Verify checkboxes via WebDriverUni", () => {
    //it.only runs that single test case only.
    beforeEach(function() {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Dropdown-Checkboxes-RadioButtons/index.html" target="_blank" id="dropdown-checkboxes-radiobuttons">
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        // check() -- Check checkbox(es) or radio(s).
        //This element must be an <input> with type checkbox or radio.
    })

    it("check and validate checkbox ", () => {
        cy.get("#checkboxes > :nth-child(1) > input").check()
        cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked")
        cy.get("#checkboxes > label > input").check("option-2")

        //using alias option
        cy.get("#checkboxes > :nth-child(7) > input").as('option-4')
        cy.get("@option-4").check()
        cy.get("@option-4").should("be.checked")

    })

    it("un-check and validate checkbox ", () => {
        //using alias option
        cy.get("#checkboxes > :nth-child(5) > input").as('option-3')
        cy.get("@option-3").uncheck()
        //uncheck () ---> Uncheck checkbox(es) only.
        cy.get("@option-3").should("not.be.checked")

    })

    it("check / uncheck and validate multiple checkbox ", () => {
        cy.get("#checkboxes > label > input").check()
        cy.get("#checkboxes > label > input").uncheck()

        //using specific multiple checkboxes - check and uncheck
        cy.get("#checkboxes > label > input").check(['option-1','option-2'])
        cy.get("#checkboxes > label > input").uncheck(['option-1','option-2'])

    })

})
