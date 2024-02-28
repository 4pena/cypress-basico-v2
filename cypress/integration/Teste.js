it('teste', function() {

    cy.MAN_Acessar_Manager()
    cy.MAN_Esconder_notificacoes()
})

it.only('teste2', function() {

    cy.MAN_Acessar_Manager()
    cy.visit('http://10.245.0.12/manager/cad_empresa.php5?id_menu=201')
    cy.MAN_Filtro_Editar_Loja1()
})