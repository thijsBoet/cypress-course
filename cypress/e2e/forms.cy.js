describe('form test', () => {
  beforeEach(() => {
    // Can set BaseURL in cypress.config.json => e2e: {baseUrl: 'http://localhost:3000'}
    cy.visit('/forms');
  });
  it('test subscribe form', () => {
		// GREEN PATH
		cy.contains(/testing forms/i);
		// Alias shorthand ==='subscribe-input'
		cy.getDataTest('subscribe-form').find('input').as('subscribe-input');
		cy.get('@subscribe-input').type('ryan@coderyan.com');
		cy.contains(/successfully subbed/i).should('not.exist');
		cy.getDataTest('subscribe-button').click();
    cy.contains(/successfully subbed/i).should('exist');
    cy.wait(3000);
    cy.contains(/successfully subbed/i).should('not.exist');

    // RED PATH
    cy.get('@subscribe-input').type('ryan@coderyan.io');
    cy.contains(/invalid email/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/invalid email/i).should('exist');
    cy.wait(3000);

    cy.contains(/invalid email/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/invalid email/i).should('exist');
  });
});