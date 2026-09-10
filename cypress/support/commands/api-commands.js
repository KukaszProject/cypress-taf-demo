Cypress.Commands.add('getPosts', () => {
cy.env(['apiUrl']).then((env) => {
    // Extract it safely
    const apiUrl = Array.isArray(env) ? env[0] : env.apiUrl;

        return cy.request({
            method: 'GET',
            url: `${apiUrl}/posts`,
        });
    });
});

Cypress.Commands.add('createPost', (payload) => {
    cy.env(['apiUrl']).then((env) => {
        const apiUrl = Array.isArray(env) ? env[0] : env.apiUrl;

        return cy.request({
            method: 'POST',
            url: `${apiUrl}/posts`,
            body: payload,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
    });
});