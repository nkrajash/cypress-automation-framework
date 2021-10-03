describe("Handle Data tables in Cypress via WebDriverUni", () => {

    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })

    it("Calculate and assert the total age of all users", () => {
        //Iterating through all the cells of the table 
        var userDetails = [];
        let numb=0;
        cy.get("#thumbnail-1 td").each(($el,index,$list) => {
            userDetails[index] = $el.text()
        }).then(() => {
            var i;
            for(i=1;i<userDetails.length;i++){
                if(Number(userDetails[i])){
                    numb+=Number(userDetails[i])
                }
                cy.log(userDetails[i])
            }
            cy.log('total age of all users =' + numb)
            expect(numb).to.eq(322)
        })
    });



    it("Calculate and assert the age of given user based on the lastname", () => {
        //Iterating through all the cells of the table 
        var userDetails = [];
        let age=0;
        //Get the lastname of each table row
        cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el,index,$list) => {
            userDetails[index] = $el.text()
            const text = userDetails[index] 
            if(text.includes("Woods")){
                cy.get("#thumbnail-1 tr td:nth-child(2)").eq(index).next().then(function(age){
                    const userAge = age.text()
                    expect(userAge).to.equal('80')
                })
            }
        }).then(() => {
            var i;
            let usrAge=0;
            for(i=1;i<userDetails.length;i++){
                if(Number(userDetails[i])){
                    usrAge+=Number(userDetails[i])
                    cy.log(userDetails[i])
                    cy.log('Age of given user '+ userDetails[i] + 'is' + usrAge)
                }
            }
        })
    })
})

