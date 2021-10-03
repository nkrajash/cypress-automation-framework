describe('CRMPro Login page feature tests', () => {

    it('verify Login page with valid title', () => {
        cy.visit("https://classic.freecrm.com/index.html")
        cy.title().should('eq','Free CRM - CRM software for customer relationship management, sales, and support.')
        cy.get("input[name='username']").type('nkrajash')
        cy.get("input[name='password']").type('CRMPro@12345')
        cy.get("input[type='submit']").click()
        cy.title().should('eq','CRMPRO')
    });

})
