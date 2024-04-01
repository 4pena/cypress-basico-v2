beforeEach(function() {

    cy.PDV_Acessar_PDV2()
 })
it.only('Petz SAT - Saida de operador', function() {

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
    function esperarElementoComTextoEsperado() {
        const valorEsperado = 'Sem operador'; // Definindo o valor esperado como uma variável
        const timeout = 10000; // Tempo limite em milissegundos (10 segundos neste exemplo)
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
                throw new Error('Texto esperado não foi encontrado dentro do tempo limite');
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
          
})

it('Petz SAT - Reducao Z', function() {
    
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
    cy.wait(1000)
    cy.get('body')
        .type('{enter}')
    function esperarElementoComTextoEsperado() {
        const timeout = 50000; // Tempo limite em milissegundos (10 segundos neste exemplo)
        const endTime = Date.now() + timeout; // Calcula o tempo final baseado no tempo atual eno tempo limite
          
           return new Cypress.Promise(resolve => {
            const checkElement = () => {
            cy.get('.txt-estado').then($element => {
                 const text = $element.text().trim();
                if (text === 'Caixa fechado') {
                 resolve(); // Resolve a promessa se o texto esperado for encontrado
                 } else if (Date.now() > endTime) {
                   throw new Error('Texto esperado não foi encontrado dentro do tempo limite');
                } else {
                 cy.wait(100); // Espera por 100 milissegundos antes de verificar novamente
                 checkElement(); // Verifica o elemento novamente
                }
            });
            };
          
            checkElement(); // Inicia a verificação do elemento
        });
        }
          
         esperarElementoComTextoEsperado();
          
})

it('Petz SAT - Abertura de Caixa', function(){
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
    function esperarElementoComTextoEsperado() {
            const timeout = 10000; // Tempo limite em milissegundos (10 segundos neste exemplo)
            const endTime = Date.now() + timeout; // Calcula o tempo final baseado no tempo atual e no tempo limite
          
            return new Cypress.Promise(resolve => {
              const checkElement = () => {
                cy.get('.txt-estado').then($element => {
                  const text = $element.text().trim();
                  if (text === 'Sem operador') {
                    resolve(); // Resolve a promessa se o texto esperado for encontrado
                  } else if (Date.now() > endTime) {
                    throw new Error('Texto esperado não foi encontrado dentro do tempo limite');
                  } else {
                    cy.wait(100); // Espera por 100 milissegundos antes de verificar novamente
                    checkElement(); // Verifica o elemento novamente
                  }
                });
              };
          
              checkElement(); // Inicia a verificação do elemento
            });
          }
          
          esperarElementoComTextoEsperado();
          
})

it('Petz SAT - Entrada de Operador', function(){
    
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
    function esperarElementoComTextoEsperado() {
            const valorEsperado = 'Sem operador'; // Definindo o valor esperado como uma variável
            const timeout = 10000; // Tempo limite em milissegundos (10 segundos neste exemplo)
            const endTime = Date.now() + timeout; // Calcula o tempo final baseado no tempo atual e no tempo limite
          
            return new Cypress.Promise(resolve => {
              const checkElement = () => {
                cy.get('.txt-estado').then($element => {
                  const text = $element.text().trim();
                  if (text === valorEsperado) {
                    // Se o texto esperado for encontrado, exiba uma mensagem de sucesso
                    cy.log('Sucesso! O valor "${valorEsperado}" foi encontrado.');
                    resolve(); // Resolve a promessa se o texto esperado for encontrado
                  } else if (Date.now() > endTime) {
                    throw new Error('Texto esperado não foi encontrado dentro do tempo limite');
                  } else {
                    cy.wait(100); // Espera por 100 milissegundos antes de verificar novamente
                    checkElement(); // Verifica o elemento novamente
                  }
                });
              };
          
              checkElement(); // Inicia a verificação do elemento
            });
          }
          
          esperarElementoComTextoEsperado();
          
          it.only(`Entrada de operador - PDV ${pdvNumber}`, function() { // Usa o número do PDV no título do teste
            cy.visit(var_pdv.URL_INTERFACE_WEB);
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
                    const timeout = 10000; // Tempo limite em milissegundos (10 segundos neste exemplo)
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
                            throw new Error('Texto esperado não foi encontrado dentro do tempo limite');
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
