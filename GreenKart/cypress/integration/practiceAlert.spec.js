/// <reference types="Cypress" />

/*
1. O que está sendo testado? Practice Page, Popup de alerta
2. Sob que circunstâncias, condições? Ao clicar em um botão que exiba um popup
3. Qual o resultado esperado? Confirmar que a mensagem no popup está de acordo com a esperada
*/

describe('Practice Page - Popup de alerta', function(){

    it('Ao clicar em um botão que exiba um popup, confirmar que a mensagem no popup está de acordo com a esperada', function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice")

    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    //window:alert
    cy.on('window:alert', (str)=>{
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    //window:confirm
    cy.on('window:confirm', (str)=>{
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    }) 

})

})