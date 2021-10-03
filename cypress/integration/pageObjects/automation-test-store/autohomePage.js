class autohomePage {
    
    accessHomepage() {
        cy.visit("https://www.automationteststore.com/",{timeOut:60000}) //overrides the pageLoadTimeout
    }

    clickOn_HairCare_Link() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }

}

export default autohomePage