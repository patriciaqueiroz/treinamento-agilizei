// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... }) 
// url: https://conduit.productionready.io/api
// rota: /users/login

Cypress.Commands.add('login', () => {
  
  cy.request({
    method: 'POST',
    url: `${Cypress.env('ApiUrl')}/users/login`, // baseUrl is prepended to url
    form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      user: {
        password: Cypress.env('user').password,
        email: Cypress.env('user').email
      }
    },
    headers: {
      'accept': 'application/jason',
      'content-type': 'application/json'

    }

  }).then(response => {
    //jason Path
    cy.log(response.body.user.token);
    localStorage.setItem('token', response.body.user.token)
  });
  cy.visit('/');

  // verificar se foi autenticado

  cy.get('.nav-pills a.nav-link')  // deve conter 2 elementos para realizar o proximo teste
    .should('have.length', 2)

  cy.get('.nav-pills a.nav-link') // 2 elementos
    // posição eq, first, last
    //.eq(0)
    .first() // equivalente ao eq(0)
    .should('contain.text', 'Your Feed')
})
