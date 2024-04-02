const pdvData = require('./var_pdv.json');

pdvData.forEach((pdv, index) => {
    const basePort = parseInt(pdv.basePORTA); // Base da porta

    pdv.endpoints.forEach(endpoint => {
        const pdvNumber = parseInt(endpoint.port); // Número do PDV
        const port = `${basePort}${pdvNumber}`; // Calcula a porta do PDV corretamente
        const USUARIO = endpoint.usuario; // Ajusta para 'usuario' conforme no JSON
        const SENHA = pdv.senha; // Utiliza a senha fixa do JSON
        const serverName = pdv.server; // Nome do servidor
        
        it(`${serverName} - Abertura de Caixa - PDV ${pdvNumber}`, function() {
            const url = `${pdv.baseURL}${pdvNumber}/Interface/index.html`;

            cy.visit(url);
            cy.wait(5000);
            cy.get('#button-1014-btnInnerEl')
                .click();
            cy.get('#campoinput-1775-inputEl')
                .type(pdv.baseIP);
            cy.get('#campoinput-1776-inputEl')
                .type(port);
            cy.get('#teclaentrar-1780-btnInnerEl')
                .click();

            cy.get('#campoinput-1260-inputEl')
                .type('{esc}');
            cy.get('#campoinput-1260-inputEl')
                .type('151')
                .should('have.value', '151');
            cy.get('#teclafuncao-1230-btnEl')
                .click();
            cy.wait(5000);
            cy.contains('FUNCIONÁRIO:')
                .should('be.visible');
            cy.get('body')
                .type(USUARIO);
            cy.xpath("/html/body/div[9]/div[2]/div/div/div[1]/div/div/table/tbody/tr[2]/td/input")
                .should('have.value', USUARIO);
            cy.get('body')
                .type('{enter}');
            cy.contains('SENHA MANUTENÇÃO:')
                .should('be.visible');
            cy.get('body')
                .type(SENHA);
            cy.get('body')
                .type('{enter}');
            cy.contains('DATA:')
                .should('be.visible');
            cy.get('body')
                .type('{enter}');
            cy.contains('HORA:')
                .should('be.visible');
            cy.get('body')
                .type('{enter}');

            function esperarElementoComTextoEsperado() {
                const valorEsperado = 'Sem operador'; 
                const timeout = 60000; 
                const endTime = Date.now() + timeout; 
                  
                return new Cypress.Promise(resolve => {
                    const checkElement = () => {
                        cy.get('.txt-estado').then($element => {
                            const text = $element.text().trim();
                            if (text === valorEsperado) {
                                cy.log('Sucesso! O valor "' + valorEsperado + '" foi encontrado.');
                                resolve(); 
                            } else if (Date.now() > endTime) {
                                throw new Error('O Valor esperado "' + valorEsperado + '" não foi encontrado dentro do tempo limite');
                            } else {
                                cy.wait(100); 
                                checkElement(); 
                            }
                        });
                    };

                    checkElement(); 
                });
            }

            esperarElementoComTextoEsperado();
        });
    });
});
