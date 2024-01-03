/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar login com sucesso', () => {
        cy.get('#username').type('teste_teste_one@teste.com.br')
        cy.get('#password').type('cypress@teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('a > .hidden-xs').should('contain', 'Welcome')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, teste_teste_one')

    })


    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('teste_teste_one@teste.com.br')
        cy.get('#password').type('senhaincorreta')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail teste_teste_one@teste.com.br está incorreta. Perdeu a senha?')

    })

    
    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () =>{
        cy.get('#username').type('teste_usuarioincorreto@teste.com.br')
        cy.get('#password').type('cypress@teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário')

    })


})
