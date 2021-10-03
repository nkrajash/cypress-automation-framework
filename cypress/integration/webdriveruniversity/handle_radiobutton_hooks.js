describe("Verify radio buttons via WebDriverUni", () => {
    before(() => {
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
    //it.only runs that single test case only.
    it("check and validate radiobutton", () => {
        cy.get("#radio-buttons").find("[type='radio']").first().check()
        cy.get("#radio-buttons").find("[type='radio']").eq(1).check()
        cy.get("#radio-buttons").find("[type='radio']").eq(2).check()
        cy.get("#radio-buttons").find("[type='radio']").eq(3).check()
        cy.get("#radio-buttons").find("[type='radio']").last().check()

    })

    it("Validate the state of specific radio button ", () => {
        cy.get("[value='lettuce']").should("not.be.checked")
        cy.get("[value='cabbage']").should("not.be.checked")
        cy.get("[value='pumpkin']").should("be.checked")
        
        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should("be.checked")

        //using alias option
        cy.get("#radio-buttons-selected-disabled > input[type=radio]:nth-child(3)").as('option-2')
        cy.get("@option-2").should("be.disabled")

        cy.get("#radio-buttons-selected-disabled > input[type=radio]:nth-child(5)").as('option-3')
        cy.get("@option-3").check()
        cy.get("@option-3").should("be.checked")

    })

})
