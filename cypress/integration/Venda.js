it('Venda PDV 5', function() {

    cy.PDV_Acessar_PDV5()
    cy.get('#campoinput-1260-inputEl').type('1005')
    cy.get('#campoinput-1260-inputEl').type('{enter}')
    cy.wait(2000)
    cy.get('body').type('{enter}')
    cy.wait(2000)
    cy.get('#teclafinalizar-1231-btnIconEl').click()
    cy.wait(2000)
    cy.get('.produto-total').should('have.text', '25,75')
    cy.contains('button', 'DINHEIRO').click();
    cy.wait(2000)
    cy.contains('button', 'Não arredondar').click();
    cy.wait(7000)
    cy.get('.txt-estado').should('have.text', 'Caixa livre');
})

it.only('Teste Flag', function(){

    cy.MAN_Acessar_Manager()
    cy.visit('http://10.245.0.12/manager/cad_devolucao.php5')
      cy.get('#FLT_COD_LOJA').select('1')
      cy.get('#FLT_DATA_CADASTRO').clear().type('{enter}')
      //cy.contains('label', 'Devolução Emitida para Loja Origem').click();
      cy.get('#FLT_FLG_LOJA_ORIGEM').check({ force: true }).should('be.checked')
      //cy.get('#EXEC_FILTRO_CUSTOM').click()
      //cy.wait(2000)
})