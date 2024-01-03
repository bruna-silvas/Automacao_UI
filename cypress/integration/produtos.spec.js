/// <reference types="cypress" />

describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve selecionar um item da lista de produtos', () => {
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .contains('Augusta Pullover Jacket')
            .click()

        cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Augusta Pullover Jacket')
    });


    it.only('Deve adicionar um produto no carrinho', () => {
        var quantidade = 5

        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]')
            .contains('Augusta Pullover Jacket').click()
            cy.get('.button-variable-item-S').click()
            cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Augusta Pullover Jacket” foram adicionados no seu carrinho.')

    })

})