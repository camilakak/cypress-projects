/// <reference types="cypress" />

/*
1. O que está sendo testado? Twitter Clone, Post
2. Sob que circunstâncias, condições? Ao digitar uma string no campo e clicar em Tweet
3. Qual o resultado esperado? Deve ser realizado o post do Tweet
*/

describe('Twitter Clone - Login', () => {
    it('Ao digitar uma string no campo e clicar em Tweet, deve ser realizado o post do Tweet', () => {
        
        cy.login()

        cy.visit('/')

        cy.postTweet("Teste3")

    });

});