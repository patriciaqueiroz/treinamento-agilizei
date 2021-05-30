// favoritar.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


it('Favorite Article', function() {
  /* ==== Generated with Cypress Studio ==== */
cy.login();
  cy.get('.nav-link')
  .contains('Global Feed')
  .click();
 


  cy.get('div [class="article-preview"]').should('have.length.above',2); 
  
  cy.get('[class="btn btn-sm btn-outline-primary"]').first().click();


  // essa não é a forma adequada, porém não consegui pegar o valor abaixo
  // ==>> cy.get('span[class="counter"]').first().invoke('text') para comparar no parametro do should
  // vou continuar pesquisando.

  
  cy.get('span[class="counter"]').first().should('contain.text', 1);


    



});
