beforeEach(function() {

    cy.PDV_Acessar_PDV3()
 })
it('Petz ECF - Saida de operador', function() {

    cy.get('#campoinput-1260-inputEl')
        .type('155')
        .should('have.value', '155')
    cy.get('#teclafuncao-1230-btnEl')
        .click()
    cy.contains('FUNCIONÁRIO:')
        .should('be.visible')  
    cy.get('body')
        .type('1')
    cy.xpath("/html/body/div[9]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
        .should('have.value', '1')
    cy.get('body')
        .type('{enter}')
    cy.contains('SENHA MANUTENÇÃO:')
        .should('be.visible')
    cy.get('body')
        .type('123456')
    cy.get('body')
        .type('{enter}')
    cy.contains('SAI OPERADOR:')
        .should('be.visible')
    cy.get('body')
    .type('1')
    cy.xpath("/html/body/div[10]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
        .should('have.value', '1')
    cy.get('body')
        .type('{enter}')
    cy.contains('DINHEIRO :')
        .should('be.visible')
    cy.contains('span', 'Terminar')
        .should('be.visible')
        .click()
    cy.contains('SUBSÍDIO :')
        .should('be.visible')
    cy.contains('span', 'Terminar')
        .should('be.visible')
        .click()
    cy.get('.txt-estado')
        .should('have.text', 'Sem operador')
})

it('Petz ECF - Reducao Z', function() {
    
    cy.get('#campoinput-1260-inputEl')
        .type('159')
        .should('have.value', '159')
    cy.get('#teclafuncao-1230-btnEl')
        .click()
    cy.contains('FUNCIONÁRIO:')
        .should('be.visible')  
    cy.get('body')
        .type('1')
    cy.xpath("/html/body/div[9]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
        .should('have.value', '1')
    cy.get('body')
        .type('{enter}')
    cy.contains('SENHA MANUTENÇÃO:')
        .should('be.visible')
    cy.get('body')
        .type('123456')
    cy.get('body')
        .type('{enter}')
    cy.wait(36000)
    cy.get('.txt-estado')
        .should('have.text', 'Caixa fechado')
})

it('Petz ECF - Abertura de Caixa', function(){
    cy.get('#campoinput-1260-inputEl')
        .type('151')
        .should('have.value', '151')
    cy.get('#teclafuncao-1230-btnEl')
        .click()
    cy.contains('FUNCIONÁRIO:')
        .should('be.visible')  
    cy.get('body')
        .type('1')
    cy.xpath("/html/body/div[9]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
        .should('have.value', '1')
    cy.get('body')
        .type('{enter}')
    cy.contains('SENHA MANUTENÇÃO:')
        .should('be.visible')
    cy.get('body')
        .type('123456')
    cy.get('body')
        .type('{enter}')
    cy.contains('DATA:')
        .should('be.visible')
    cy.get('body')
        .type('{enter}')
    cy.contains('HORA:')
        .should('be.visible')
    cy.get('body')
        .type('{enter}')
    cy.get('.txt-estado')
        .should('have.text', 'Sem operador')
})

it('Petz ECF - Entrada de Operador', function(){
    
    cy.get('#campoinput-1260-inputEl')
        .type('154')
        .should('have.value', '154')
    cy.get('#teclafuncao-1230-btnEl')
        .click()
    cy.contains('OPERADOR:')
        .should('be.visible')  
    cy.get('body')
        .type('1')
    cy.xpath("/html/body/div[9]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
        .should('have.value', '1')
    cy.get('body')
        .type('{enter}')
    cy.contains('SENHA MANUTENÇÃO:')
        .should('be.visible')
    cy.get('body')
        .type('123456')
    cy.get('body')
        .type('{enter}')
    cy.get('.txt-estado')
        .should('have.text', 'Caixa livre')
})