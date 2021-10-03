describe("Add multiple items to basket", () => {
    
    before( function(){
        cy.fixture("products").then(function(data) {
            globalThis.data = data
        })
    })

    beforeEach( function() {
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    it("Add specific items to basket", () => {
        globalThis.data.productName.forEach( function(element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdowntoggle > .fa').click()
    })

})