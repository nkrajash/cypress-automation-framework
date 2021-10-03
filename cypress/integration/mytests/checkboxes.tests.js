describe('Category page tests', () => {

    it('Category page -Automationpractice', () => {
        cy.visit("http://www.automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.get(".sf-with-ul").first().click()
        //to check all checkboxes and verify them  
        //cy.get(".checkbox").check().should("have.class","checked")
        //check the checkboxes and verify them using parent
        cy.get(".checkbox").check().parent().should("have.class","checked")
        //uncheck the checkboxes and verify them  
        cy.wait(5000)
        cy.get(".checkbox").uncheck().parent().should("not.have.class","checked")

    });


    it('Snapdeal page - filter checkbox test', () => {
        cy.visit("http://www.snapdeal.com/")
        cy.get("#inputValEnter").type("Laptop")
        cy.contains('Search').click()
        //Checking the checkboxes
        cy.get("[data-displayname='Brand'] > .filter-content >  .filter-inner >:nth-child(n) > input")
        .check({force:true})
        cy.get("[data-displayname='Brand'] > .filter-content >  .filter-inner >:nth-child(n) > input")
        .should("have.checked","checked")
 
        //Un-checking the checkboxes
        cy.get("[data-displayname='Brand'] > .filter-content >  .filter-inner >:nth-child(n) > input")
        .uncheck({force:true})
        cy.get("[data-displayname='Brand'] > .filter-content >  .filter-inner >:nth-child(n) > input")
        .should("not.have.checked","checked")
    });

})
