const testData = require("../../fixtures/test_data/data.json")

testData.forEach((testCase) => {
    describe("Test File Upload via WebDriver uni", () => {
            before(() =>{
                //cypress code
                cy.visit("https://www.webdriveruniversity.com") //click on remote URL
                //Use Jquery to remove  the target attribute to click on the child tab from parent tab.
                //It opens the child tab in the same browser instead of opening multiple tabs.
                //<a href="File-Upload/index.html" target="_blank" id="file-upload">
                cy.get("#file-upload").invoke('removeAttr','target').click({force:true})
            })
            //Fixtures are ideally used to load data from an external source / file i.e. .json file etc.
            beforeEach( () => {
                if(testCase.isUploadTrue){
                    cy.fixture(testCase.fileName,'base64').then(fileContent => {
                        cy.get("#myFile").attachFile(
                            {
                                fileContent,
                                fileName:testCase.fileName,
                                mimeType:testCase.mimeType
                            },
                            {
                                uploadType : "input"
                            }
                        )
                    })
                }
            })

            afterEach(function () {
                cy.get("#submit-button").click()
            })

            //it.only runs that single test case only.

            it(`Upload the '${testCase.fileName}' with '${testCase.isUploadTrue}' flag`, function () {
                cy.log(`The testcase with '${testCase.fileName}' to be uploaded`)
                if(testCase.isUploadTrue){
                    cy.on('window:alert', (str) => {
                        expect(str).to.equal('Your file has now been uploaded!')
                    })
                }
                else{
                    cy.on('window:alert', (str) => {
                        expect(str).to.equal('You need to select a file to upload!')
                    })
                }
            });

        })

    })