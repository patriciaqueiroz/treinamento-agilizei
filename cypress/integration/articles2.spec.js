/* ==== Test Created with Cypress Studio ==== */
describe('Artigos', () => {
  it('Criar um Novo Artigo', function () {
 //login a partir de um arquivo separado commands
 cy.login()


    const titulo = 'Estudo na Pandemia'

    cy.get('[href="/editor"]').click();
    cy.get('input.form-control[placeholder="Article title"]').clear();
    cy.get('input.form-control[placeholder="Article title"]').type(titulo);
    cy.get('input.form-control[placeholder="What is this article about?"]').clear();
    cy.get('input.form-control[placeholder="What is this article about?"]').type('Trata da dificultade de educar uma criança');
    cy.get('textarea.form-control').click();
    cy.get('textarea.form-control').clear();
    cy.get('textarea.form-control').type('está sendo muito dificel educar uma crianca durante a pandemia')
    cy.get('input.form-control[placeholder="Enter tags"]').type('Teteu');
    cy.get('button.btn-primary').contains('Publish article').click();


    //verificando se realizou a inserção corretamente
    cy.get('h1')
      .should('contain.text', titulo)
      .click();


    /* ==== End Cypress Studio ==== */
   

    
  });
});
