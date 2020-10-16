/// <reference types="cypress" />

describe('Form input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline form', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Denny Nur Ramadhan')
        cy.get('[placeholder="Email"][type="text"]').type('denny.dand@outlook.com')
        cy.get('.custom-checkbox').eq(0).click();
    });

    it('Fill Using the Grid', () => {
        cy.get('#inputEmail1').type('denny.dand@outlook.com')
        cy.get('#inputPassword2').type('Killer_queen666')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    });



    
})