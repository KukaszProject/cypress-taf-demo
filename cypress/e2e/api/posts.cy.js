describe('JSONPlaceholder Posts API Tests', () => {

    it('Successfully fetches a list of posts', () => {
        cy.getPosts().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.include('application/json');

            expect(response.body.length).to.be.greaterThan(0);
            expect(response.body[0]).to.have.property('userId');
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0]).to.have.property('title');
        });
    });

    it('Successfully creates a new post', () => {
        const newPostPayload = {
            title: 'Cypress Test Post',
            body: 'This is a test post created by Cypress.',
            userId: 1,
        };

        cy.createPost(newPostPayload).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.headers['content-type']).to.include('application/json');

            expect(response.body.title).to.eq(newPostPayload.title);
            expect(response.body.body).to.eq(newPostPayload.body);
            expect(response.body.userId).to.eq(newPostPayload.userId);

            expect(response.body).to.have.property('id');
        });
    });
});