/// <reference types="cypress" />

/*
1. O que está sendo testado? Twitter Clone, Login
2. Sob que circunstâncias, condições? Ao autenticar com credenciais válidas
3. Qual o resultado esperado? Deve ser direcionado para o feed
*/

describe('Twitter Clone - Login', () => {

    //HOOKS -> Mocha
    //-> antes de cada ou todos os testes -> beforeEach / before
    //-> depois de cada ou todos os testes -> afterEach / after

    beforeEach(() => {
        //cy.intercept
        //1. RouteMatcher - mapeamento, filtro da rota que a gente quer
        //2. RouteHandler (opcional) - controlar o que a rota vai retornar (mock)

        //Request URL: https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.svg
        //Request Method: GET

        cy.intercept({
            method: 'GET',
            hostname: 'res.cloudinary.com'
        }, {
            statusCode: 200,
            fixture: 'download'
        }).as('cloudinary')
    });
    
    it('Ao autenticar com credenciais válidas, deve ser direcionado para o feed', () => {

        cy.login()

        cy.visit('/')

        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length', 6)
    });
});