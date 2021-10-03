describe("Test Drop down feature in Cypress", () => {

    it( "With Select tag testing",() => {
        cy.visit("https://www.orangehrm.com/orangehrm-30-day-trial")
        cy.get('#Form_submitForm_Country')
        .select('India')
        .should('have.value','India')
    })

    it( "Google search test",() => {
        //Boostrap Drop down
        cy.visit("https://www.google.com")
        cy.get("[name='q']").type("cypress")
        cy.get(".OBMEnb")
        .find("li span")
        .contains("cypress testing")
        .click()
    })

    it( "Automation Ecommerce search test",() => {
        cy.visit("http://www.automationpractice.com/index.php")
        cy.get("#search_query_top").type("dress")
        cy.get(".ac_results").find("li").contains("T-shirts").click()
    })

    

})