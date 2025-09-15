class RegisterPage {


    mensagem = {
        register: '×Cadastro realizado com sucesso'
    }
    elements = {
        nameInput: () => cy.get('[data-testid="nome"]'),
        emailInput: () => cy.get('[data-testid="email"]'),
        passwordInput: () => cy.get('[data-testid="password"]'),
        registerButton: () => cy.get('[data-testid="cadastrar"]'),
        mensagem: () => cy.get('.alert')
    }

    fillName(name) {
        this.elements.nameInput().type(name);
    }

    fillEmail(email) {
        this.elements.emailInput().type(email);
    }

    fillPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickRegister() {
        this.elements.registerButton().click();
    }

    validatRegister(){
       this.elements.mensagem().should('have.text', this.mensagem.register)
    }
}

export default new RegisterPage();