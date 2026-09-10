import {loginSelectors} from '../../support/selectors/login-selectors';

describe('SauceDemo Login Flow', () => {
    let password;
    
    beforeEach(() => {
        cy.env(['SAUCE_PASSWORD']).then((secrets) => {
            password = secrets.SAUCE_PASSWORD; 
        });
    });

    it('Successfully logs in with valid credentials', () => {
        cy.loginUI('standard_user', password);
        cy.url().should('include', '/inventory.html');
    });

    it('Displays an error message with invalid credentials', () => {
        cy.loginUI('invalid_user', 'invalid_password');
        cy.get(loginSelectors.errorMessage).should('be.visible').and('contain', 'Username and password do not match any user in this service');
    });

    it('Displays an error message for locked out user', () => {
        cy.loginUI('locked_out_user', password);
        cy.get(loginSelectors.errorMessage).should('be.visible').and('contain', 'Sorry, this user has been locked out.');
    });

});