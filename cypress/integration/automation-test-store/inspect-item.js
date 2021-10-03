describe("Inspect Automation-test-store items using chain of commands", () => {
    it("click on the first item using item header", () => {
        //cypress code
        cy.visit("https://www.automationteststore.com/")
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });

    it("click on the first item using item text", () => {
        //cypress code
        cy.visit("https://www.automationteststore.com/")
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            cy.log("Selected the following item:" + itemHeaderText.text())
        })
    });

    it("click on the first item using using index", () => {
        //cypress code
        cy.visit("https://www.automationteststore.com/")
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()

    });
})