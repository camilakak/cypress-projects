// <reference types="cypress" />

/*
1. O que está sendo testado? Parodify, Play
2. Sob que circunstâncias, condições? Ao clicar em uma paródia
3. Qual o resultado esperado? Deve ser reproduzida corretamente
*/

describe('Parodify - Play', () => {
    it('Ao clicar em uma paródia, deve ser reproduzida corretamente', () => {
    
        cy.visit('https://parodify.herokuapp.com/users/sign_in')

        cy.get('input[name*=email]').type('papito@parodify.com')
        cy.get('#user_password').type('pwd123')
        cy.get('input[type=submit]').click()
        cy.get('a[href$=sign_out]').should('be.visible')

        cy.get('a[href*=search]').click()
        cy.get('h2').should('have.text','Buscar')

        cy.xpath('//img[contains(@src,"sertanejo.png")]/..').click()
        cy.get('.categories > h2').should('have.text','Sertanejo')
        
        cy.get('p').contains('Marcus e Debug').parent().click()
  
        //cy.get('h2').contains('Músicas')
        
        cy.wait(5000)
        cy.get('a[data-song$="bugdemanha.mp3"]').click()

    
    });
});