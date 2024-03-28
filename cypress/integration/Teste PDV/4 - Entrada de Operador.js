const var_pdv = require('./var_pdv.json');

var_pdv.forEach((var_pdv, index)  => {
    const pdvNumber = index + 2; // Calcula o número do PDV

    it(`Entrada de operador - PDV ${pdvNumber}`, function() { // Usa o número do PDV no título do teste
        cy.visit(var_pdv.URL_INTERFACE_WEB)
        cy.wait(5000);
        cy.get('#button-1014-btnInnerEl').click();
        cy.get('#campoinput-1775-inputEl').type(var_pdv.IP_PDV);
        cy.get('#campoinput-1776-inputEl').type(var_pdv.PORTA_PDV);
        cy.get('#teclaentrar-1780-btnInnerEl').click();

        cy.get('#campoinput-1260-inputEl')
            .type('154')
            .should('have.value', '154')
        cy.get('#teclafuncao-1230-btnEl')
            .click()
        cy.wait(5000)
        cy.contains('OPERADOR:')
            .should('be.visible')  
        cy.get('body')
            .type(var_pdv.USUARIO)
        cy.xpath("/html/body/div[9]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
            .should('have.value', var_pdv.USUARIO);
        cy.get('body')
            .type('{enter}')
        cy.contains('SENHA MANUTENÇÃO:')
            .should('be.visible')
        cy.get('body')
            .type(var_pdv.SENHA)
        cy.get('body')
            .type('{enter}')
            function esperarElementoComTextoEsperado() {
                const valorEsperado = 'Caixa livre'; // Definindo o valor esperado como uma variável
                const timeout = 20000; // Tempo limite em milissegundos (10 segundos neste exemplo)
                const endTime = Date.now() + timeout; // Calcula o tempo final baseado no tempo atual eno tempo limite
                  
                return new Cypress.Promise(resolve => {
                    const checkElement = () => {
                    cy.get('.txt-estado').then($element => {
                        const text = $element.text().trim();
                         if (text === valorEsperado) {
                        // Se o texto esperado for encontrado, exiba uma mensagem de sucesso
                        cy.log('Sucesso! O valor "' + valorEsperado + '" foi encontrado.');
                        resolve(); // Resolve a promessa se o texto esperado for encontrado
                        } else if (Date.now() > endTime) {
                        throw new Error('O Valor esperado "' + valorEsperado + '" não foi encontrado dentro do tempo limite');
                        } else {
                        cy.wait(100); // Espera por 100 milissegundos antes de verificar novamente
                        checkElement(); // Verifica o elemento novamente
                         }
                    });
                    };
                  
                     checkElement(); // Inicia a verificação do elemento
                });
                }
                  
                esperarElementoComTextoEsperado()
                  
    });
});
