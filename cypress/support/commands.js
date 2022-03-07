Cypress.Commands.add("getBySelector", (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add("createSession", name => {
    cy.request(
        'POST',
        'http://localhost:3001/api/sessions',
        {
            name,
            time: 10000,
            createdAt: new Date().toString()
        }
    ).then(response =>{
        cy.log(JSON.stringify(response.body));
    });
});
