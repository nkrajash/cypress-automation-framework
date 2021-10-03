describe("Test contact-us form via WebDriverUni", () => {
    //it.only runs that single test case only.
    it("should be able to submit a successful submission via contact-us form ", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="Contact-Us/contactus.html" target="_blank" id="contact-us">
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.attr','title','WebDriver | Contact Us')
        cy.title().should('eq', 'WebDriver | Contact Us')
        cy.get('[name="first_name"]').type("Naveen Kumar")
        cy.get('[name="last_name"]').type("Rajashekar")
        cy.get('[name="email"]').type("rnavinkmr45.12@gmail.com")
        cy.get('[name="message"]').type('This is contact us page for user Naveen Kumar R')
        //cy.get('textarea.feeback-input').type('How can I learn Cypress')
        cy.get('[type="submit"]').click()
        cy.url().should('equal', 'https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
        cy.get('div#contact_reply > h1').should('have.text', 'Thank You for your Message!')
        cy.get('h1').should('contain', 'Thank You')

    });

    it("should not be able to submit a successful submission via contact-us form as all fields are required", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true}) //Click a DOM element without waiting for actionability.
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get("#contact-us").click({force:true}) //Click a DOM element without waiting for actionability.
        //Type into a DOM element.
        cy.title().should('include', 'WebDriver')
        cy.get('[name="first_name"]').type("Naveen Kumar")
        cy.get('[name="last_name"]').type("Rajashekar")
        cy.get('[name="email"]').type("rnavinkmr45.12@gmail.com")
        //cy.get('textarea.feeback-input').type('How can I learn Cypress')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
        cy.url().should('include','contact_us.php')
        //If any of the fields missed , it will throw an error
    });
})