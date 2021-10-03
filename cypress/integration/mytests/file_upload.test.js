describe("File Upload use cases", () => {

    before(() => {
        cy.visit("http://www.automationpractice.com/index.php",{failOnStatusCode: false})
        cy.login("rnavinkmr45.12@gmail.com","Naveen@12345")
    })

    beforeEach(() => {
    });


    it("Simple file upload", () => {
        cy.get("#contact-link").click().url().should('include','controller=contact')
        const myfixturespath = "Java.util.Collection_hierarchy.png"
        cy.get("#fileUpload").attachFile(myfixturespath)
    })

    it('Header: Verify if state of the Cart is kept', () => {
        cy.visit('http://automationpractice.com/')
        //Function which asserts state of the Cart containing 1 product.
        const testCartState = () => {
       // cy.url().should('include', 'controller=product')
        cy.get('.ajax_cart_quantity').first().invoke('text').should('equal', '1')
        }

        cy.log("hii", testCartState)

        //Invoke custom command which navigates to random product page.
       // cy.clickRandomProduct();
       cy.get('.ajax_add_to_cart_button').first().click()
        //Add selected product to cart
       // cy.get('#add_to_cart').click();
        //Select 'to continue shopping' on modal.
        //Assert state of cart (if it presents correct number).
        cy.get('.continue').click().then(testCartState);
        //Reload page 
        //and assert the Cart's state (should keep previous number of products).
        cy.reload().then(testCartState)
      });

})