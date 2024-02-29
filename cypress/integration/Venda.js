it('Venda PDV 5', function() {

    cy.PDV_Acessar_PDV5()
    cy.get('#campoinput-1260-inputEl').type('1005')
    cy.get('#campoinput-1260-inputEl').type('{enter}')
    cy.wait(2000)
    cy.get('body').type('{enter}');
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
