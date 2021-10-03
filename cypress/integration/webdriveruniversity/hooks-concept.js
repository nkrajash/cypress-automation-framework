describe('Hooks concept in Cypress', () => {

    before(() => {
      cy.log("runs once before all tests in the block")
    })
  
    beforeEach(() => {
        cy.log("runs before each test in the block")
    })
  
    afterEach(() => {
        cy.log("runs after each test in the block")
    })
  
    after(() => {
        cy.log("runs once after all tests in the block")
    })

    it("Example test 1",()=> {
        cy.log("Example test 1")

    })

    specify("Example test 2",()=> {
        cy.log("Example test 2")
        
    })

    it("Example test 3",()=> {
        cy.log("Example test 3")
        
    })
})
  