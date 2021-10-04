describe("Test contact-us form via Automation-test-store", () => {
    //it.only runs that single test case only.
    it("should be able to submit a successful submission via contact-us form ", {retries:4}, () => {
        //Adding retry logic to tests
        //cypress code
        //cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //cy.get("#contact-us > .thumbnail").click() //Click a DOM element.
        //cy.get("#contact-us").click({force:true}) //Click a DOM element without waiting for actionability.
        cy.visit("https://www.automationteststore.com/")
        //Type into a DOM element.
        //cy.url().should('eq', 'http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        //cy.xpath("//a[contains(@href,'contact')]").click() //using cypress-xpath package

         //improved CSS Selector - dynamic selector
        cy.get("a[href$='contact555']").click().then(function(linkText) {
            cy.log("Clicked on the link using text:" + linkText.text())
        })
        
        cy.get('#ContactUsFrm_first_name').type("Joe")
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com")
        //chai Query
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        //cy.get('.col-md-6 > .btn').click()
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        console.log("Test has completed!") //Non Cypress command -gets executed well before even the first line of the test
        cy.log("Test has completed!!") //Print a message to the Cypress Command Log.
    });
})