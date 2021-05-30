// favoritar.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


// Realizar um comentário no artigo mais antigo 


// colocando o comentário em uma variável
const comentarioArtigo = " Parabéns, ficou excelente!!!!"


it('Comment Article', function() {
  /* ==== Generated with Cypress Studio ==== */
cy.login();
  cy.get('.nav-link')
  .contains('Global Feed')
  .click();
 
  
  //cy.get('div [class="article-preview"]').should('have.length.above',2);
  
  //cy.get('[class="page-item"]').should('have.length',2);
  cy.get('[class="page-link"]').last().click();
  
  cy.get('div [class="article-preview"]').should('have.length.above',2);

  cy.get('div [class="article-preview"]')
  .last()
  .click();

  cy.get('textarea').type(comentarioArtigo);
  cy.get('[type="submit"]').contains('Post Comment').click();

  // confirmando se o comentário foi inserido corretamente

  cy.get('.card-text').first().should('contain.text',comentarioArtigo);

});
