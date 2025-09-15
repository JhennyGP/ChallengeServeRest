class LoginPage {
  elements = {
    emailInput: () => cy.get('[data-testid="email"]'),
    passwordInput: () => cy.get('[data-testid="senha"]'),
    loginButton: () => cy.get('[data-testid="entrar"]'),
    registerLink: () => cy.get('[data-testid="cadastrar"]'),
  };

  fillEmail(email) {
    this.elements.emailInput().type(email);
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  goToRegisterPage() {
    this.elements.registerLink().click();
  }
}

export default new LoginPage();
