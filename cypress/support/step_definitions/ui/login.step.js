/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';
import RegisterPage from '../../pages/RegisterPage';

Given('a user is already registered via UI', () => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };

  cy.visit('https://front.serverest.dev/cadastrarusuarios');
  RegisterPage.fillName(user.name);
  RegisterPage.fillEmail(user.email);
  RegisterPage.fillPassword(user.password);
  RegisterPage.clickRegister();

  cy.wrap(user).as('createdUser');

   RegisterPage.validatRegister()
});

Then('should be redirected to the {string} page', (page) => {
  cy.url().should('include', page);
});