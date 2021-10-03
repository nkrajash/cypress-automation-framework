describe("Verify variables, Cypress commands and jQuery commands", () => {
    it("Navigating to specific product pages", () => {
        //cypress code
        cy.visit("https://www.automationteststore.com/")
        //The following lines of code  will fail:
        //const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        //const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        //makeupLink.click()
        //skincareLink.click()

        //The following lines of code only will pass:
        //as the order of execution is not guaranteed in Cypress unlike Selenium,
        //const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup')
        //makeupLink.click()
        //const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare')
        //skincareLink.click()

        //Recommended approach:
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        cy.get("a[href*='product/category&path=']").contains('Skincare').click()
        cy.get("a[href*='product/category&path=']").contains('Fragrance').click()

    });

    it.only("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains('Makeup').click()
        //The following code will fail
        const header = cy.get("h1 .maintext")
        cy.log(header.text())

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq('Makeup')
        })
    });

    it.only("Validate properties of the Contact Us page", () => {
        cy.visit("https://www.automationteststore.com/index.php?rt=content/contact")

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

        //JQuery approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands(Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
    })

})