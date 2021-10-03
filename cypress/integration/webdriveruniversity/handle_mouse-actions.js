describe("Test Mouse Actions", () => {
    //it.only runs that single test case only.

    it("Scroll Elements into view", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Actions/index.html" target="_blank" id="actions">
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true}) 
    })

    it("I should be able to drag and drop a draggable item", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Actions/index.html" target="_blank" id="actions">
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true}) 
        //trigger --> Trigger an event on a DOM element.
        cy.get("#draggable").trigger('mousedown',{ which: 1, pageX: 600, pageY: 100 })
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true})
    })

    it("I should be able to perform a double click on mouse", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Actions/index.html" target="_blank" id="actions">
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true}) 
        //trigger --> Trigger an event on a DOM element.
        cy.get("#double-click").dblclick()
    })

    it("I should be able to hold down the left mouse click button on a given element", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Actions/index.html" target="_blank" id="actions">
        cy.get("#actions").scrollIntoView().invoke('removeAttr','target').click({force:true}) 
        //trigger --> Trigger an event on a DOM element.
        cy.get("#click-box").trigger('mousedown',{which: 1}).then(($element) => {
            expect($element).to.have.css("background-color","rgb(0, 255, 0)")
        })
    })

})