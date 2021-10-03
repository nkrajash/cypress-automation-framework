import webdriverhomePage from '../../pageObjects/webdriver-uni/specs/webdriverhomePage'
import contactusPage from '../../pageObjects/webdriver-uni/specs/contactusPage'

/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config("defaultCommandTimeout", 20000);
    
    const homePage = new webdriverhomePage()
    const contactUsPage = new contactusPage()

    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        homePage.visitHomePage()
        cy.wait(3000)
        homePage.clickOn_ContactUs_Button()
        cy.pause()
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("include", "contactus");
        contactUsPage.contactForm_Submission(Cypress.env("first_name"), Cypress.env("last_name"), data.email,
            "How can I learn Cypress?", "h1", "Thank You for your Message!")
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        contactUsPage.contactForm_Submission(Cypress.env("first_name"), Cypress.env("last_name"),  " ",
            "How can I learn Cypress?", "body", "Error: Invalid email address")
    });

});
