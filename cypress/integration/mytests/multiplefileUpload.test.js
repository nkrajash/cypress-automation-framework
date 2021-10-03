describe("Multiple File Upload use cases", () => {

    it('multiple files upload', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'image1.jpeg';
        const yourFixturePath1 = 'upload.txt';
        const yourFixturePath2 = 'example.json';

        cy.get('#filesToUpload')
        .attachFile(yourFixturePath)
        .attachFile(yourFixturePath1)
        .attachFile(yourFixturePath2)
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    });

    it('change file name while uploading', ()=> {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const yourFixturePath = 'image1.jpeg';
        cy.get('#filesToUpload').attachFile({ filePath: yourFixturePath, fileName: 'users.json' })
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')
    });

})