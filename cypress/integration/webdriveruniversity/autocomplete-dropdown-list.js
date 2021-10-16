//Triple slash directory enables per file the Cypress AutoSuggestions for Cypress API
//like ---> /// <reference types="Cypress" />
describe("Interact AutoComplete dropdown lists via WebDriverUni", () => {
    //it.only runs that single test case only.
    it("Select specific producs via AutoComplete lists", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Dropdown-Checkboxes-RadioButtons/index.html" target="_blank" id="dropdown-checkboxes-radiobuttons">
        cy.get("#autocomplete-textfield").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        cy.get("#myInput").type("A")
        cy.get('#myInputautocomplete-list > *').each(($el,index,$list) => {
            const prod = $el.text()
            const productToSelect = 'Almond'
            if(prod === productToSelect){
                cy.wrap($el).click()
				//or else use below line
				//$el.trigger("click")
                cy.get("#submit-button").click()
                cy.url().should("include",productToSelect)
            }
        }).then( () => {
            cy.get("#myInput").type("g")
            cy.get('#myInputautocomplete-list > *').each( ($el,index,$list) => {
                const prod = $el.text()
                const productToSelect = 'Grapes'
                if(prod === productToSelect){
                    cy.wrap($el).click()
                    cy.get("#submit-button").click()
                    cy.url().should("contain",productToSelect)
                }
            })
        })
    })
})