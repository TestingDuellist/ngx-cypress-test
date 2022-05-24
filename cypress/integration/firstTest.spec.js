

describe('example to-do app', () => {

    it("first Test", () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        // cy.contains('[status="warning"]','Sign in').click()

        cy.get("#inputEmail3")
            .parents('Form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('Form')
            .find('nb-checkbox')
            .click()
            .should('text', 'Remember me')

    })

    it.only('then and wrap methode', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const passwordsecondtext = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordsecondtext) hoi

            })
        })
    })
})