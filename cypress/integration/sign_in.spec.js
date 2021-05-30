/// <reference types="cypress" />

describe ('Login', () => {

    it('efetuar login com usuario e senha validos', () => {
        //acessar o site
        cy.visit('/');
        // clicar no botao sign in
        cy.get('.nav-link')  // 4 elementos
        .contains ('Sign in')  // contem Sign in
        .click()

        // cy.get('[href*=login]').click()

        // as duas linhas abaixo foram para o objeto user em env no arquivo package.json
        const user = Cypress.env('user').email
        const pass = Cypress.env('user').password

        // informar usuario e senha
        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(pass)

        // clicar no botao entrar

        cy.get('button.btn-primary').click()

        // verificar se foi autenticado

        cy.get('.nav-pills a.nav-link')  // deve conter 2 elementos para realizar o proximo teste
        .should('have.length', 2)

        cy.get('.nav-pills a.nav-link') // 2 elementos
        // posição eq, first, last
        //.eq(0)
        .first() // equivalente ao eq(0)
        .should('contain.text', 'Your Feed')
    });

});
