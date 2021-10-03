import autostorehomepage from '../../pageObjects/automation-test-store/autohomePage'
import autostorehaircare from '../../pageObjects/automation-test-store/autohairCare'

/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    const autoStoreHomePage = new autostorehomepage();
    const autoStoreHairCare = new autostorehaircare();

    before( function(){
        cy.fixture("products").then(function(data) {
            globalThis.data = data
        })
    })

    beforeEach( function() {
        autoStoreHomePage.accessHomepage();
        autoStoreHomePage.clickOn_HairCare_Link();
    })

    it("Add specific items to basket", () => {
        autoStoreHairCare.addHairCareProductsToBasket()
    })

})