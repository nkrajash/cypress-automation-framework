describe("Handle JS Alerts", () => {
    //it.only runs that single test case only.
    it("Confirm JS Alerts contains the correct text, using a stub", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Popup-Alerts/index.html" target="_blank" id="popup-alerts">
        cy.get("#popup-alerts").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //Cypress automatically handles alerts for the user.
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get("#button1")
            .click()
            .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('I am an alert box!')
            //first event --> getCall
        })

    })

    it("Handle JS Alerts automatically and confirm it contains right text", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Popup-Alerts/index.html" target="_blank" id="popup-alerts">
        cy.get("#popup-alerts").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //Cypress automatically handles alerts for the user.
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
        //Assert on the alert text
        //Creating custom alert
        cy.on('window:alert', () => {
            alert('I am manual alert box!') 
        })
    });

    it("Validate JS Confirm Alerts works corrrectly when clicked OK", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Popup-Alerts/index.html" target="_blank" id="popup-alerts">
        cy.get("#popup-alerts").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //Cypress automatically handles alerts for the user.
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return true
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    });

    it("Validate JS Confirm Alerts works corrrectly when clicked Cancel", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Popup-Alerts/index.html" target="_blank" id="popup-alerts">
        cy.get("#popup-alerts").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //Cypress automatically handles alerts for the user.
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            return false
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });


    it("Validate JS Confirm Alerts works corrrectly when clicked OK ,using a stub", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Popup-Alerts/index.html" target="_blank" id="popup-alerts">
        cy.get("#popup-alerts").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //Cypress automatically handles alerts for the user.
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get("#button4")
            .click()
            .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true //click on OK..accept the alert
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })

    it("Validate JS Confirm Alerts works corrrectly when clicked Cancel ,using a stub", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Popup-Alerts/index.html" target="_blank" id="popup-alerts">
        cy.get("#popup-alerts").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //Cypress automatically handles alerts for the user.
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get("#button4")
            .click()
            .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return false //click on Cancel..reject the alert
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed Cancel!')
        })
    })


})