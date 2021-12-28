// <reference types="cypress" />

/*
1. O que está sendo testado? Parodify, Login
2. Sob que circunstâncias, condições? Ao autenticar com credenciais válidas
3. Qual o resultado esperado? Deve ser direcionado para a página inicial
*/

describe('Parodify - Login', () => {
    it('Ao autenticar com credenciais válidas, deve ser direcionado para a página inicial', () => {
    
        cy.visit('https://parodify.herokuapp.com/users/sign_in')

        cy.get('input[name*=email]').type('papito@parodify.com')
        cy.get('#user_password').type('pwd123')
        cy.get('input[type=submit]').click()
        cy.get('a[href$=sign_out]').should('be.visible')
    });
});