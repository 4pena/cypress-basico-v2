/// <reference types="Cypress" />

    it('CEP', function() {

        cy.Acessar_Manager()

        cy.visit('http://10.245.0.12/manager/adm_importacao_cep.php5')
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/CADCEP.zip', { force: true })
        //cy.get('#importar').click()
        //cy.contains('div[class=progresso_total"]').should('contain', 'Progresso total 100%') 
        cy.get('div.progresso_total').should(($element) => {
            // Criar um loop para verificar se o elemento contém o texto desejado
            let textoDesejado = 'Progresso total 100%';
            let intervalo = setInterval(() => {
              if ($element.text().includes(textoDesejado)) {
                clearInterval(intervalo); // Parar o loop se o texto for encontrado
              }
            }, 1000); // Esperar 1 segundo entre cada verificação
          });
      });


      it('CEP', function() {
        cy.Acessar_Manager()
        cy.visit('http://10.245.0.12/manager/adm_importacao_cep.php5')
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/CADCEP.zip', { force: true })
    
        cy.wait(30000); // Aguarda 30 segundos (pode ajustar conforme necessário)
    
        // Espera até que o elemento com o texto desejado apareça
        cy.contains('div.progresso_total', 'Progresso total 100%').should('be.visible');
    });
    
    it.only('CEP', function() {
        
        cy.Acessar_Manager()
        
        cy.visit('http://10.245.0.12/manager/adm_importacao_cep.php5')
        
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/CADCEP.zip', { force: true })
    
        // Função assíncrona para aguardar até que o texto desejado apareça
        const esperarTextoDesejado = async () => {
            let textoDesejado = 'Progresso total 100%';
            let intervalo = 10000; // Intervalo entre cada verificação (em milissegundos)
            let maximoTentativas = 10; // Número máximo de tentativas
    
            for (let tentativa = 0; tentativa < maximoTentativas; tentativa++) {
                await cy.wait(intervalo); // Aguarda o intervalo definido
    
                // Verifica se o texto desejado está presente no elemento
                cy.get('div.progresso_total').then(($element) => {
                    if ($element.text().includes(textoDesejado)) {
                        // Se o texto desejado for encontrado, termina o loop
                        return;
                    }
                });
    
                // Se chegou à última tentativa e o texto ainda não foi encontrado, falha o teste
                if (tentativa === maximoTentativas - 1) {
                    throw new Error('Texto desejado não encontrado após várias tentativas.');
                }
            }
        };
    
        // Chama a função para esperar o texto desejado
        esperarTextoDesejado();
    });
    

    describe('Teste CEP', function() {
        beforeEach(function() {
            cy.Acessar_Manager();
            cy.visit('http://10.245.0.12/manager/adm_importacao_cep.php5');
            cy.get('input[type="file"]').selectFile('./cypress/fixtures/CADCEP.zip', { force: true });
        });
    
        it.only('Deve verificar o progresso total', function() {
            // Função para aguardar até que o texto desejado apareça
            const esperarTextoDesejado = () => {
                let textoDesejado = 'Progresso total 100%';
    
                // Define uma função recursiva que será chamada repetidamente até que o texto desejado seja encontrado
                const verificarTexto = () => {
                    // Verifica se o texto desejado está presente no elemento
                    cy.get('div.progresso_total').then(($element) => {
                        if ($element.text().includes(textoDesejado)) {
                            // Se o texto desejado for encontrado, retorna para sair da função
                            return;
                        } else {
                            // Se o texto desejado não foi encontrado, espera um curto intervalo e chama a função novamente
                            cy.wait(2000); // Espera 2 segundos antes de verificar novamente
                            verificarTexto(); // Chama a função recursivamente para verificar novamente
                        }
                    });
                };
    
                // Inicia a verificação do texto desejado
                verificarTexto();
            };
    
            // Chama a função para aguardar o texto desejado
            esperarTextoDesejado();
        });
    });
    



