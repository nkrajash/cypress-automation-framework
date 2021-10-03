describe("Interact with dropdown list  via WebDriverUni", () => {
    //it.only runs that single test case only.
    it("Select specific values via select dropdown lists", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Dropdown-Checkboxes-RadioButtons/index.html" target="_blank" id="dropdown-checkboxes-radiobuttons">
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //select by value
        cy.get("#dropdowm-menu-1").select('c#')
        cy.get("#dropdowm-menu-2").select('testng')
        cy.get("#dropdowm-menu-3").select('jquery')
        
        //select by text
        cy.get("#dropdowm-menu-1").select('Python').should('have.value', 'python')
        cy.get("#dropdowm-menu-2").select('Maven').should('have.value', 'maven')
        cy.get("#dropdowm-menu-3").select('CSS').should('have.value', 'css')

        cy.get("#dropdowm-menu-1").select('c#').should("have.value",'c#')
        cy.get("#dropdowm-menu-2").select('testng').contains('TestNG')
        cy.get("#dropdowm-menu-3").select('jquery').should("have.value",'jquery')
    })
})