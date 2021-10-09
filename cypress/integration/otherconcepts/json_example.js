/// <reference types="cypress"/>

describe("JSON Objects", () => {
    //it.only runs that single test case only.
    
    it("JSON Object examples", () => {
        //cypress code
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie","Rose","Howard"]
        const exampleArrayOfObjects = [ {"key": "Luke"},{"key2":"Skywalker"},{"key3":"22"} ]

        const users = {
            "firstName" : "Joe",
            "lastName" : "Blogs",
            "Age" : "30",
            "Students" : [
                {
                    "firstName" : "Jim",
                    "lastName" : "Blogs",
                },
                {
                    "firstName" : "Sarah",
                    "lastName" : "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"])    //Tim
        cy.log(exampleObject["key2"])   //Jones
        cy.log(exampleObject.key)       //Tim
        cy.log(exampleObject.key2)      //Jones
        cy.log(exampleArrayOfValues[0]) //Sophie
        cy.log(exampleArrayOfValues[1]) //Rose
        cy.log(exampleArrayOfValues[2]) //Howard

        cy.log(users.firstName) //Joe
        cy.log(users.lastName)  //Blogs

        cy.log(users.Students[0].firstName) //Joe
        cy.log(users.Students[0].lastName)  //Blogs

        cy.log(users.Students[1].firstName)  //Sarah
        cy.log(users.Students[1].lastName)   //Parker

        cy.log(exampleArrayOfObjects[0].key)    //Luke
        cy.log(exampleArrayOfObjects[1].key2)   //Skywalker
        cy.log(exampleArrayOfObjects[2].key3)   //22

    })

})
