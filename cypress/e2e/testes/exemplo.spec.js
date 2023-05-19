describe('Exemplo de teste Cypress', () => {
    it('Visitar uma página e verificar um elemento', () => {
      // Visitar a página da web
      cy.visit('https://www.exemplo.com')
  
      // Verificar se um elemento está presente
      cy.get('h1').should('contain', 'Título da Página')
    })
  })
  