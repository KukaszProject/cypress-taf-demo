import {loginSelectors} from '../selectors/login-selectors';

Cypress.Commands.add('loginUI', (username, password) => {
    cy.visit('/');
    cy.get(loginSelectors.username).type(username);
    cy.get(loginSelectors.password).type(password, {log: false});
    cy.get(loginSelectors.loginButton).click();
});