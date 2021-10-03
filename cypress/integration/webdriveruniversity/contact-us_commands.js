describe("Test contact-us form via WebDriverUni", () => {

    beforeEach( function() {
        //cypress code
        cy.fixture("example").then(function(data) {
            //this.data = data;
            globalThis.data = data;
        })

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
    })

    //it.only runs that single test case only.
    it("should be able to submit a successful submission via contact-us form ", () => {
        //cypress code
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().should('have.attr','title','WebDriver | Contact Us')
        cy.title().should('eq', 'WebDriver | Contact Us')
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "How can I learn Cypress", "h1","Thank You for your Message!")
        cy.url().should('equal', 'https://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
    });

    it("should not be able to submit a successful submission via contact-us form as all fields are required", () => {
        //cypress code
        cy.title().should('include', 'WebDriver')
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress" ,"body","Error: Invalid email address")
        cy.url().should('include','contact_us.php')
        //If any of the fields missed , it will throw an error
    });

})