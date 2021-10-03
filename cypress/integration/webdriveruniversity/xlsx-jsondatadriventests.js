/// <reference types="Cypress" />

let rowsLength;

describe('Testing data driven tests from xlsx - json using Cypress', () => {   
    before(() => {
        cy.task("readXlsx",{ file:"cypress/fixtures/test_data/testData.xlsx" , sheet: "Sheet1"}).then(
            (rows) => {
                rowsLength = rows.length
                cy.log(rowsLength) //10
                cy.writeFile("cypress/fixtures/test_data/testData.json", rows );
        })
        cy.visit("https://the-internet.herokuapp.com/login")
    })

    it.only("should fail to login for the specified details", () => {
        cy.fixture('test_data/testData.json').then((data) => {
            cy.log(rowsLength) // => 10
            for (let index = 0; index < rowsLength; index++) {
                cy.log(data[index].username)
                cy.log(data[index].password)
                cy.get("#username").type(data[index].username);
                cy.get("#password").type(data[index].password);
                cy.get(".radius").click()
                cy.get("#flash").contains("Your username is invalid!");
                cy.get("a[href$='logout']").should("not.exist");
            }
        })
    });
})
