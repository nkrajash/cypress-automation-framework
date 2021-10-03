describe("Test File Upload via WebDriver uni", () => {
    //it.only runs that single test case only.
    it("Upload a jpeg file..", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="File-Upload/index.html" target="_blank" id="file-upload">
        cy.get("#file-upload").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        //Path of the fixtures folder will be the default folder for the files to be uploaded in cy.fixture()
        cy.fixture("image1.jpeg","base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "image1.jpeg",
                    mimeType: "image/jpeg"
                },
                {
                    uploadType : "input"
                }
            )
        })
        cy.get("#submit-button").click()

    });

    it("Upload no file..", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="File-Upload/index.html" target="_blank" id="file-upload">
        cy.get("#file-upload").invoke('removeAttr','target').click({force:true}) 
        //Click a DOM element without waiting for actionability.
        cy.get("#submit-button").click()

    });

    it("Upload a zip file..", () => {
        //cypress code
        cy.visit("https://www.webdriveruniversity.com") //click on remote URL
        //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
        //It opens the child tab in the same browser instead of opening multiple tabs.
        //<a href="File-Upload/index.html" target="_blank" id="file-upload">
        const fileName = "chromedriver_win32.zip";
        const mimeType = 'application/zip';
        cy.get("#file-upload").invoke('removeAttr','target').click({force:true})
        cy.fixture(fileName, 'base64').then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName,
                    mimeType
                },
                {
                    uploadType : "input"
                }
            )
        })
        cy.get("#submit-button").click()
    });

})