describe("Mouse over feature in Cypress", () => {

    it( "Click on Sign Up link test",() => {
        cy.visit("https://www.spicejet.com/",{failOnStatusCode: false})
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains("SpiceClub Members").trigger("mouseover")
        cy.contains("Sign up").click()
    })

    it( "Click on Member login link test",() => {
        cy.visit("https://www.spicejet.com/",{failOnStatusCode: false})
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains("SpiceClub Members").trigger("mouseover")
        cy.contains("Member Login").click()
    })

    it( "Add to Cart tests ",() => {
        cy.visit("http://www.automationpractice.com/index.php",{failOnStatusCode: false})
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get(".cross").click()
        cy.wait(3000)
        cy.get(".cart_block").should("be.hidden").invoke("show")
        cy.get("#button_order_cart").click()
        cy.url().should("include","controller=order")
    })

})