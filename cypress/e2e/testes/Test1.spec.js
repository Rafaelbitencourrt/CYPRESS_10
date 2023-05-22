describe('My First Test Suite', function(){
    

    it('My First Test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(5000)
        cy.get('.search-keyword').type('brocoll')
        cy.get('.products').contains('Brocolli').should('be.visible')
    })

})