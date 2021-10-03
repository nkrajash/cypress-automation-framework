class webdriverhomePage{
    visitHomePage(){
        cy.visit(Cypress.env("webdriverUni_homePage"),{timeOut:60000}) //overrides the pageLoadTimeout
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true },{timeOut:8000})
    }
}
export default webdriverhomePage;