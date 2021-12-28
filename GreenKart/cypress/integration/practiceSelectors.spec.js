/// <reference types="Cypress" />

/*
1. O que está sendo testado? Practice Page, Teste de seleção
2. Sob que circunstâncias, condições? Ao clicar em uma opção em checkbox/dropdown/radiobox
3. Qual o resultado esperado? Confirmar que a opção correta foi selecionada
*/

describe('Practice Page - Teste de seleção', () => {
    it('Ao clicar em uma opção em checkbox/dropdown/radiobox, confirmar que a opção correta foi selecionada', () => {

    //Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //Static Dropdown
    cy.get('select').select('option2').should('have.value','option2')

    //Dynamic Dropdown
    cy.get('#autocomplete').type('ind')

    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if ($el.text()==="India"){
            $el.click()
        }
    })
    cy.get('#autocomplete').should('have.value',"India")

    //Radio Buttons
    cy.get('[value="radio2"]').check().should('be.checked')
    


})

})