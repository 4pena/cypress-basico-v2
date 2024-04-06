// Defina a função fora do corpo do teste
function esperarElementoComTextoEsperado() {
    const timeout = 2400000; // 40 minutos de tempo limite
    const endTime = Date.now() + timeout;
  
    return new Cypress.Promise(resolve => {
      const checkElement = () => {
        cy.get('.detalhe_importacao').then($element => {
          const text = $element.text().trim();
          // Extrair a data e hora do texto
          const regex = /(\d{2}-\d{2}-\d{4})\sàs\s(\d{2}:\d{2}:\d{2})/;
          const match = text.match(regex);
          if (match) {
            const dataTexto = match[1];
            const horaTexto = match[2];
            // Obter a data e hora atual
            const agora = new Date();
            const dataAtual = agora.toLocaleDateString('pt-BR', { timeZone: 'UTC' }).split('/').reverse().join('-');
            const horaAtual = agora.toLocaleTimeString('pt-BR', { timeZone: 'UTC' });
            // Verificar se a data e hora no texto correspondem à data e hora atual
            if (dataTexto === dataAtual && horaTexto === horaAtual) {
              cy.log(`Sucesso! O valor "${text}" foi encontrado.`);
              resolve();
            } else if (Date.now() > endTime) {
              throw new Error(`O Valor esperado "${text}" não foi encontrado dentro do tempo limite`);
            } else {
              cy.wait(100);
              checkElement();
            }
          } else {
            throw new Error('Não foi possível extrair a data e hora do texto.');
          }
        });
      };
  
      checkElement();
    });
  }
  
  // O teste Cypress
  it('Teste CEP', function() {
    //SQL
    cy.MAN_Acessar_Manager_Serv1();
    cy.visit('http://10.245.0.12/manager/adm_importacao_cep.php5');
    cy.get('input[type="file"]').selectFile('./cypress/fixtures/CADCEP.zip', { force: true });
    cy.get('#FILENOME').should("have.value", 'CADCEP.zip');
    cy.get('#importar').click();
  
    // Chame a função de espera aqui
    esperarElementoComTextoEsperado();
  });
  