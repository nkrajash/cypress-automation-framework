class contactusPage {

    contactForm_Submission(firstname,lastname,email,comment,$selector,text_to_locate){
        cy.get('[name="first_name"]').type(firstname)
        cy.get('[name="last_name"]').type(lastname)
        cy.get('[name="email"]').type(email)
        cy.get('[name="message"]').type(comment)
        cy.get('[type="submit"]').click()
        cy.get($selector).pause().contains(text_to_locate,{timeOut:60000})
        cy.screenshot()
        cy.screenshot("Made a contact us form submission")
    }
}

export default contactusPage;