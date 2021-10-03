// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//***********************************************
//Reusable Commands:

import 'cypress-file-upload';
import 'cypress-xpath';
import 'node-xlsx'

Cypress.Commands.add('login',(email,password) => {
    cy.get(".login").click()
    cy.get("#email").type(email)
    cy.get("#passwd").type(password)
    cy.get("#SubmitLogin").click()
})

Cypress.Commands.add('search',(product) => {
    cy.get("#search_query_top").type(product)
    cy.get("button[name='submit_search']").click()
})

Cypress.Commands.add("parseXlsx", (inputFile) => {
    return cy.task("parseXlsx", { 
        filePath: inputFile 
    })
});

Cypress.Commands.add('selectProduct',(productName) => {
    cy.get(".fixed_wrapper .prdocutname").each(($el,index,$list) => {
        if($el.text().includes(productName)){
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add('webdriverUni_ContactForm_Submission',(firstname,lastname,email,comment,$selector,text_to_locate) => {
    cy.get('[name="first_name"]').type(firstname)
    cy.get('[name="last_name"]').type(lastname)
    cy.get('[name="email"]').type(email)
    cy.get('[name="message"]').type(comment)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(text_to_locate)
})

Cypress.Commands.add("addProductToBasket", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el,index,$list) => {
        if( $el.text() === productName){
            cy.log($el.text())
            cy.get('.productcart').eq(index).click()
        }
    })
})

