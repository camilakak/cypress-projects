/// <reference types="Cypress" />

/*
1. O que está sendo testado? Practice Page, Teste de visivel/invisivel
2. Sob que circunstâncias, condições? Ao clicar no botão hide/show
3. Qual o resultado esperado? Verificar que o input fica visivel/invisivel respectivamente
*/

describe('Practice Page - Teste de visivel/invisivel', () => {
    it('Ao clicar no botão hide/show, verificar que o input fica visivel/invisivel respectivamente', () => {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice")

    //Visible and Invisible elements
    cy.get('#displayed-text').should('be.visible')
    cy.get("#hide-textbox").click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get("#show-textbox").click()
    cy.get('#displayed-text').should('be.visible') 

})

})