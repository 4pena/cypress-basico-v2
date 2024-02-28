describe('Teste CEP', function() {
    beforeEach(function() {
        cy.Acessar_Manager();
        cy.visit('http://10.245.0.12/manager/adm_importacao_cep.php5');
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/CADCEP.zip', { force: true })
        cy.get('#FILENOME').should("have.value", 'CADCEP.zip')
        cy.get('#importar').click()
    });

    it('Deve verificar o progresso total', function() {
        // Função para aguardar até que o texto desejado apareça

        const esperarTextoDesejado = async () => {
            let textoDesejado = 'Importaï¿½ï¿½o concluï¿½da com sucesso';
            let intervalo = 10000; // Intervalo entre cada verificação (em milissegundos)
            let maximoTentativas = 100; // Número máximo de tentativas
    
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
    }) 
});