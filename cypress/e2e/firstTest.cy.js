describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5174/');

    cy.get('[data-testid="cypress-title"]').should("exist");
  })
})