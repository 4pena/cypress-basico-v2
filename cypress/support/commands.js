// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-xpath');
Cypress.Commands.add('teste', function () {
        
    cy.get('#firstName')
        .type('Gabriel')
        
    cy.get('#lastName')
        .type('Pena')
      
    cy.get('#email')
        .type('gabrielpena@gmail.com')
        
    cy.get('#open-text-area')
        .type('Verdão')

    
})

Cypress.Commands.add('MAN_Acessar_Manager', function () {

    cy.visit('http://10.245.0.12/manager/login.php5')
    cy.get('#USUARIO').type('1')
    cy.get('#SENHA').type('654321')
    cy.get('input[type="submit"]').click()
})

Cypress.Commands.add('MAN_Clicar_no_botao_do_popup_LGPD', function () {

    cy.get('lgpd-enviar').click()
    cy.wait(10000);
})

Cypress.Commands.add('MAN_Clicar_em_area_nula_da_tela', function () {
    
    cy.wait(1000);
    cy.get('CONTENT_HEADER	').click()
    
})

Cypress.Commands.add('MAN_Esconder_notificacoes', function () {

    cy.wait(1000)
    cy.get('[class="dropdown-toggle"][data-toggle="dropdown"]', { multiple: true }).first().click();
});
    

Cypress.Commands.add('MAN_Fechar_barra_fixa_Manager', function () {

    cy.get('.fa-chevron-down').click();

})

Cypress.Commands.add('MAN_Esconder_Painel_Lateral', function () {

    cy.get('.sidebar-toggle').click();
    
})

Cypress.Commands.add('MAN_Clicar_em_OK_popup', function () {

    cy.get('.confirm').click()
    
})

Cypress.Commands.add('MAN_Clicar_em_Cancelar_popup', function () {

    cy.get('.cancel').click()
    
})

Cypress.Commands.add('MAN_Logout_Manager', function () {

    cy.get('[class="dropdown-toggle"][data-toggle="dropdown"]', { multiple: true }).last().click()
    cy.get('#btn_Sair').click()	
    cy.get('.form-signin-heading').should('have.text', 'Seja bem-vindo, por favor identifique-se.');
})

Cypress.Commands.add('MAN_Executar_tecla_HOME', function () {

    cy.get('#LATERAL_LOGO_ZANTHUS').type('{home}');
})

Cypress.Commands.add('MAN_Executar_tecla_SALVAR_ALT', function () {

    cy.get('#btn_Salvar').click()
    //aguardar condicao  className	confirm	=	OK
    cy.get('#alert_message_internal').should('have.text', 'Operação(Alt) Executada com Sucesso.');
    cy.get('.confirm').click()
})

Cypress.Commands.add('MAN_Executar_tecla_SALVAR_INC', function () {

    cy.get('#btn_Salvar').click()
    //aguardar condicao  className	confirm	=	OK
    cy.get('#alert_message_internal').should('have.text', 'Operação(Inc) Executada com Sucesso.');
    cy.get('.confirm').click()
})

Cypress.Commands.add('MAN_Executar_tecla_SALVAR_EXC', function () {

    cy.get('#btn_Salvar').click()
    //aguardar condicao  className	confirm	=	OK
    cy.get('#alert_message_internal').should('have.text', 'Operação(Exc) Executada com Sucesso.');
    cy.get('.confirm').click()
})

Cypress.Commands.add('MAN_Executar_tecla_SALVAR_e_CONTINUAR', function () {

    cy.get('#btn_Salvar_continuar').click()
    //aguardar condicao  className	confirm	=	OK
    cy.get('#alert_message_internal').should('have.text', 'Operação(Inc) Executada com Sucesso.');
    cy.get('.confirm').click()
})

Cypress.Commands.add('MAN_Filtro_Editar_Loja1', function () {

    cy.get('#CONTENT_HEADER').invoke('text').should('contain', 'Cadastro de loja')
    cy.get('#btn_Search').click()	
    cy.get('#FLT_COD_LOJA').type('1')
    cy.get('#EXEC_FILTRO').click()
    cy.get('#loja_alterar').click()
})

Cypress.Commands.add('MAN_Filtro_Editar_Loja43', function () {

    cy.get('#CONTENT_HEADER').invoke('text').should('contain', 'Cadastro de loja')
    cy.get('#btn_Search').click()	
    cy.get('#FLT_COD_LOJA').type('43')
    cy.get('#EXEC_FILTRO').click()
    cy.get('#loja_alterar').click()
})

Cypress.Commands.add('MAN_Filtro_Editar_Loja159', function () {

    cy.get('#CONTENT_HEADER').invoke('text').should('contain', 'Cadastro de loja')
    cy.get('#btn_Search').click()	
    cy.get('#FLT_COD_LOJA').type('159')
    cy.get('#EXEC_FILTRO').click()
    cy.get('#loja_alterar').click()
})

Cypress.Commands.add('PDV_Acessar_PDV2', function () {

    cy.visit('http://10.245.0.32:9092/Interface/index.html')
    cy.wait(5000)
    cy.get('#button-1014-btnInnerEl').click()
    cy.get('#campoinput-1775-inputEl').type('10.245.0.32')
    cy.get('#campoinput-1776-inputEl').type('8892')
    cy.get('#teclaentrar-1780-btnInnerEl').click()
})

Cypress.Commands.add('PDV_Acessar_PDV3', function () {

    cy.visit('http://10.245.0.22:9093/Interface/index.html')
    cy.wait(5000)
    cy.get('#button-1014-btnInnerEl').click()
    cy.get('#campoinput-1775-inputEl').type('10.245.0.22')
    cy.get('#campoinput-1776-inputEl').type('8893')
    cy.get('#teclaentrar-1780-btnInnerEl').click()
})

Cypress.Commands.add('PDV_Acessar_PDV4', function () {

    cy.visit('http://10.245.0.22:9094/Interface/index.html')
    cy.wait(5000)
    cy.get('#button-1014-btnInnerEl').click()
    cy.get('#campoinput-1775-inputEl').type('10.245.0.22')
    cy.get('#campoinput-1776-inputEl').type('8894')
    cy.get('#teclaentrar-1780-btnInnerEl').click()
})

Cypress.Commands.add('PDV_Acessar_PDV5', function () {

    cy.visit('http://10.245.0.22:9095/Interface/index.html')
    cy.wait(5000)
    cy.get('#button-1014-btnInnerEl').click()
    cy.get('#campoinput-1775-inputEl').type('10.245.0.22')
    cy.get('#campoinput-1776-inputEl').type('8895')
    cy.get('#teclaentrar-1780-btnInnerEl').click()
})

Cypress.Commands.add('PDV_Acessar_PDV6', function () {

    cy.visit('http://10.245.0.12:9096/Interface/index.html')
    cy.wait(5000)
    cy.get('#button-1014-btnInnerEl').click()
    cy.get('#campoinput-1775-inputEl').type('10.245.0.12')
    cy.get('#campoinput-1776-inputEl').type('8896')
    cy.get('#teclaentrar-1780-btnInnerEl').click()
})

Cypress.Commands.add('PDV_Acessar_PDV7', function () {

    cy.visit('http://10.245.0.12:9097/Interface/index.html')
    cy.wait(5000)
    cy.get('#button-1014-btnInnerEl').click()
    cy.get('#campoinput-1775-inputEl').type('10.245.0.12')
    cy.get('#campoinput-1776-inputEl').type('8897')
    cy.get('#teclaentrar-1780-btnInnerEl').click()
})
