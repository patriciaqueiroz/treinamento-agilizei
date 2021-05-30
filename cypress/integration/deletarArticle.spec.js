// favoritar.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/* ==== Test Created with Cypress Studio ==== */

const articleName = "estudo-na-pandemia";

// Comentário do artigo

// const comentarioArtigo = " Parabéns, ficou excelente!!!!"

const publisherName = "Mulher%20Maravilha"
it('Delete Article', function() {
  /* ==== Generated with Cypress Studio ==== */
cy.login();
  cy.get('.nav-link')
  .contains('Global Feed')
  .click();
  cy.get(`.nav-link[href="/profile/${publisherName}"]`).click();

   
    
    //while (cy.get(`[href*="${}"]`).should())
    cy.get(`[href*="${articleName}"]`)
    .first()
    .click();

    cy.get('button.btn')
    .contains('Delete Article')
    .click();

    //Ao deletar o artigo a tela o Your Feed fica ativo

    cy.get('.nav-link.active')
    .should('contain.text', 'Your Feed');
    
    

  

  
  
  
  // cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn > :nth-child(2)').click();
  // cy.get(':nth-child(4) > .nav-link').click();
  // cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link').click();
  // cy.get(':nth-child(1) > .preview-link > h1').click();
  // cy.get('.article-actions > .article-meta > :nth-child(3) > .btn-outline-primary > :nth-child(2)').click();
  // cy.get('.article-actions > .article-meta > :nth-child(3) > .btn-primary > :nth-child(2)').click();
  /* ==== End Cypress Studio ==== */
});
