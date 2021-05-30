// temp;js.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
it('temp', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://purescript-react-realworld.netlify.app/');
  cy.get(':nth-child(1) > .form-control').clear();
  cy.get(':nth-child(1) > .form-control').type('mulhermaravilha@gmail.com');
  cy.get(':nth-child(2) > .form-control').clear();
  cy.get(':nth-child(2) > .form-control').type('mulher1234{enter}');
  cy.get('.btn').click();
  cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click();
  cy.get(':nth-child(4) > .page-link').click();
  cy.get(':nth-child(10) > .preview-link > h1').click();
  /* ==== End Cypress Studio ==== */
});
