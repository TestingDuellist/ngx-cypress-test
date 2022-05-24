const { Input } = require("@angular/core")


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

    it('then and wrap methode', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const passwordSecondtext = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordSecondtext)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

            })
        })
    })
    it('invoke command', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //     //1
        //     cy.get('[for="inputEmail1"]').should('contain', 'Email address')


        //     //2
        //     cy.get('[for="inputEmail1"]').then(label => {
        //         expect(label.text()).to.equal('Email address')

        // })
        //3 
        cy.get('[for="inputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email')


            cy.contains('nb-card', 'Basic form')
                .find('nb-checkbox')
                .click()
                .find('.custom-checkbox')
                .invoke('attr', 'class')
                .should('contain', 'checked')
                .then(classvalue => {
                    expect(classvalue).to.contain("checked")


                })
        })

    })

    it.only('Date picker', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()


        cy.contains('nb-card', 'Common Datepicker').find("input").then(input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains("18").click()
            cy.wrap(input).invoke('prop', 'value')
            .then(input => {
                expect(input).to.contain("May 18, 2022")

        })
    })
})
})