describe('File Upload Suite', ()=>{
    
    it('Simple file upload', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.contains('Contact us').should('be.visible').click()

        /* Plain HTML input */
        const yourFixturePath = 'testdata.json'     //always give fixture file
        cy.get('#fileUpload').attachFile(yourFixturePath)   //input type="file" should be there on the element
    })

    it('Drag and drop file upload', ()=>{
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')

        /* Drag-n-drop component */
        const yourFixturePath = 'image.jpg'     //always give fixture file
        cy.get('#file').attachFile(yourFixturePath, { subjectType: 'drag-n-drop' })

        cy.get(".box__success").should('contain.text', 'Done!')
    })

    it('Multiple files upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        /* You can also attach multiple files by chaining the command */
        const yourFixturePath = 'example.json'      //always give fixture file
        const yourFixturePath2 = 'image.jpg'        //always give fixture file
        const yourFixturePath3 = 'testdata.json'    //always give fixture file

        cy.get('#filesToUpload')
        .attachFile(yourFixturePath)
        .attachFile(yourFixturePath2)
        .attachFile(yourFixturePath3)

        cy.get("#fileList > li").should('not.contain.text', 'No Files Selected')
    })

    it('Change file name while uploading', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        /* You can also attach multiple files by chaining the command */
        const yourFixturePath = 'example.json'      //always give fixture file

        cy.get('#filesToUpload').attachFile({ filePath: yourFixturePath, fileName: 'users.json' })

        cy.get("#fileList > li").should('not.contain.text', 'No Files Selected')
    })
    
})