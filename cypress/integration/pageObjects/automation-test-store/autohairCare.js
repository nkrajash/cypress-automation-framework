class autohairCare {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function(element) {
            /*Enable Debugger as below: 
            cy.addProductToBasket(element).then(() =>{
                //debugger
            })*/
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click().debug();
    }
}
export default autohairCare;