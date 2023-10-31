describe('Fundamentals test', () => {
	beforeEach(() => {
		// Can set BaseURL in cypress.config.json => e2e: {baseUrl: 'http://localhost:3000'}
		cy.visit('/fundamentals');
	});
	it('Should contains header text', () => {
		// supports REGEX
		cy.getDataTest("fundamentals-header").contains(
			/Testing Fundamentals/i,
		);
		cy.getDataTest('fundamentals-header').should(
			'contain.text',
			'Testing Fundamentals',
		);
	}),
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments/i).should('not.be.visible');
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(
    /Your tests will exist in a describe block. This block takes two arguments/i,
    ).should('be.visible');
    
    cy.get('[data-test="accordion-item-1"]  div[role="button"]').click();
    cy.contains(
    /Your tests will exist in a describe block. This block takes two arguments/i,
  ).should('not.be.visible');
	});
});
