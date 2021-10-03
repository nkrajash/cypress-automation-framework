describe("Traversing DOM elements in Cypress", () => {

        beforeEach(() => {
            cy.visit("http://webdriveruniversity.com/");
            cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
        })

        it("children() to get the children of DOM elements", () => {
            //children() --> Get the children of each DOM element within a set of DOM elements.
            cy.get(".breadcrumb.traversal-breadcrumb").children('.active').should('contain','Contact Us')
        });
    
        it("closest() to validate the closest ancestor DOM element", () => {
            //closest() --> Get the first DOM element that matches the selector 
            //    (whether it be itself or one of its ancestors).
            cy.get(".traversal-badge").closest('ul').should('have.class','list-group')
        });
    
        it("eq() to retrieve a specific element based on index", () => {
            //eq --> Get A DOM element at a specific index in an array of elements.
            cy.get(".traversal-drinks-list > *").eq(2), should('contain','Milk')
        });
    
        it("filter() to retrieve DOM elements that match a specific selector", () => {
            //filter --> Get the DOM elements that match a specific selector.
            cy.get(".btn-group.btn-group-toggle > *").filter(".active").should("contain","Button-1")
        });
    
        it("find() to retrieve DOM elements of a given selector", () => {
           //find() --> Get the descendent DOM elements of a specific selector.
           cy.get(".pagination.traversal-pagination").find("li").find("a").should("have.length",7)
           cy.get(".traversal-drinks-list").find("li").should("have.length",5)
        });
    
        it("first() to retrieve the first DOM element within elements ", () => {
            //first()-->Get the first DOM element within a set of DOM elements.
            cy.get(".traversal-drinks-list").find("li").first().should('include.text','Coffee')
            cy.get(".traversal-table > tbody > tr > td").first().should('contain','Andy')
        });
    
        it("last() to retrieve the last DOM element within elements", () => {
            //last()-->Get the last DOM element within a set of DOM elements.
            cy.get(".traversal-drinks-list").find("li").last().should('include.text','Sugar')
            cy.get(".traversal-table > tbody > tr > td").last().should('contain','Scott')
        });
    
        it("nextAll() to get all of the next sibling DOM elements within elements", () => {
            //nextAll() --> Get all following siblings of each DOM element in a set of matched DOM elements.
            cy.get(".traversal-drinks-list").contains('Tea').nextAll().should("have.length",3)
        });
        
        it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
            //nextUntil() --> Get all following siblings of each DOM element in a set of matched DOM elements up to, but not including, the element provided.
            cy.get(".traversal-drinks-list").contains('Coffee').nextUntil("#milk").should("have.length",3)
        });
        
        it("not() to remove DOM element(s) from the set of elements", () => {
            //not() --> Filter DOM element(s) from a set of DOM elements.
            cy.get(".traversal-button-states > button").not('.disabled').should("not.have.class","disabled")
        });
        
        it("parent() To get parent DOM element of elements", () => {
            //parent() --> Get the parent DOM element of a set of DOM elements.
            cy.get(".traversal-mark").parent().should("contain","Lorem ipsum dolor sit amet")
        });
        
        it("parents() to get parents DOM element of elements", () => {
            //parents() --> Get the parent DOM elements of a set of DOM elements.
            cy.get(".traversal-cite").parents().should("match","blockquote")
        });
        
        it("prev() to get the previous sibling DOM element within elements", () => {
            //prev() --> Get the immediately preceding sibling of each element in a set of the elements.
            cy.get('#sugar').prev().contains('Espresso')
        });
        
        it("prevAll() to get all previous sibling DOM elements within elements", () => {
            //prevAll() --> Get all previous siblings of each DOM element in a set of matched DOM elements.
            cy.get('.sales').prevAll().should('have.length',2)
        });
        
        it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
            //prevUntil() --> Get all previous siblings of each DOM element in a set of matched DOM elements up to, but not including, the element provided.
            cy.get('#veggie').prevUntil("#fruits").should('have.length',5)

        });
        
        it("siblings() To get all sibling DOM elements of elements", () => {
            //siblings() --> Get sibling DOM elements.
            cy.get('.traversal-button-other-states .active').siblings().should("have.length", 3)
        });
  });