const data = require('./data.json');

data.forEach((data, index)  => {
    const pdvNumber = index + 2; // Calcula o número do PDV

    it(`Saida de operador - PDV ${pdvNumber}`, function() { // Usa o número do PDV no título do teste
        cy.visit(data.URL_INTERFACE_WEB);
        cy.wait(5000);
        cy.get('#button-1014-btnInnerEl')
            .click();
        cy.get('#campoinput-1775-inputEl')
            .type(data.IP_PDV);
        cy.get('#campoinput-1776-inputEl')
            .type(data.PORTA_PDV);
        cy.get('#teclaentrar-1780-btnInnerEl')
            .click();

        cy.get('#campoinput-1260-inputEl')
            .type('155')
            .should('have.value', '155');
                
        cy.get('#teclafuncao-1230-btnEl')
            .click()
        cy.wait(3000)
        cy.contains('FUNCIONÁRIO:')
            .should('be.visible')
        cy.get('body')
            .type(data.USUARIO);
        cy.xpath("/html/body/div[9]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
            .should('have.value', data.USUARIO);
        cy.get('body')
            .type('{enter}');
        cy.contains('SENHA MANUTENÇÃO:')
            .should('be.visible')
        cy.get('body')
            .type(data.SENHA);
        cy.get('body')
            .type('{enter}');
        cy.contains('SAI OPERADOR:')
            .should('be.visible');
        cy.get('body')
            .type(data.USUARIO);
        cy.xpath("/html/body/div[10]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
            .should('have.value', data.USUARIO);
        cy.get('body')
            .type('{enter}');
        cy.contains('DINHEIRO :')
            .should('be.visible');
        cy.contains('span', 'Terminar')
            .should('be.visible')
            .click();
        cy.contains('SUBSÍDIO :')
            .should('be.visible');
        cy.contains('span', 'Terminar')
            .should('be.visible')
            .click();
        cy.get('.txt-estado')
            .should('have.text', 'Sem operador');
    });
});
