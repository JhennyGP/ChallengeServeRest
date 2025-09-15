class HomePage {
  elements = {
    logoutButton: () => cy.get('[data-testid="logout"]'),
  };

  validatePage() {
    cy.url().should('include', '/home');
  }

  clickLogout() {
    this.validatePage();
    this.elements.logoutButton()
      .should('be.visible')
      .and('have.text', 'Logout')
      .click();
  }
}

export default new HomePage();
