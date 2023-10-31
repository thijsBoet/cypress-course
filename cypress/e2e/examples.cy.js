describe('Test various examples on example page', () => {
  beforeEach(() => {
    cy.visit('/examples');
  })
  it('multi-page navigation testing', () => {
    cy.getDataTest('nav-why-cypress').click();
    cy.location('pathname').should('equal', '/');

    cy.getDataTest('nav-overview').click();
    cy.location('pathname').should('equal', '/overview');
    
    cy.getDataTest('nav-fundamentals').click();
    cy.location('pathname').should('equal', '/fundamentals');
    
    cy.getDataTest('nav-forms').click();
    cy.location('pathname').should('equal', '/forms');

    // cy.getDataTest('nav-examples').click();
    // cy.location('pathname').should('equal', '/examples');

    cy.getDataTest('nav-component').click();
    cy.location('pathname').should('equal', '/component');

    cy.getDataTest('nav-best-practices').click();
    cy.location('pathname').should('equal', '/best-practices');
  })
  it.only('created intercepts to mock a server response', () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      // body: {
      //   message: 'Successfully intercepted a request'
      // }
      // returns Mock DATA from fixtures folder
      fixture: 'example.json'
    })
    cy.getDataTest('post-button').click();
  })
});