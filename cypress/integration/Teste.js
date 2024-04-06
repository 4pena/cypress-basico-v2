/// <reference types='cypress-xpath' />

describe('Carga', () => {
    it('Validar_Carga_no_PDV_função_5362', () => {
      cy.PDV_Acessar_PDV3();
      cy.get('#campoinput-1260-inputEl').type('854');
      cy.get('#teclafuncao-1230-btnIconEl').click();
  
      function esperarElementoComTextoEsperado() {
        const textoEsperado = 'FUNCIONÁRIO:';
        const timeout = 30000; // Tempo limite em milissegundos (30 segundos neste exemplo)
        const endTime = Date.now() + timeout; // Calcula o tempo final baseado no tempo atual e no tempo limite
  
        return new Cypress.Promise(resolve => {
          const checkElement = () => {
            cy.contains(textoEsperado).should('be.visible').then(() => {
              // Se o texto esperado for encontrado e for visível, exiba uma mensagem de sucesso
              cy.log(`Sucesso! O texto "${textoEsperado}" foi encontrado e está visível.`);
              resolve(); // Resolve a promessa se o texto esperado for encontrado e estiver visível
            }).catch(() => {
              // Se o texto esperado não for encontrado ou não for visível
              if (Date.now() > endTime) {
                // Se o tempo limite for atingido sem encontrar o texto esperado, falhe o teste
                throw new Error(`Texto "${textoEsperado}" não foi encontrado ou não está visível dentro do tempo limite`);
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
    });
  });
  