/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import HomePage from '../../pages/HomePage';

When('navigate to the registration page', () => {
  LoginPage.goToRegisterPage();
});

When('fill in the registration form with new user data', () => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };

  RegisterPage.fillName(user.name);
  RegisterPage.fillEmail(user.email);
  RegisterPage.fillPassword(user.password);

  cy.wrap(user).as('createdUser');
 
});



Then('should see the message {string}', (message) => {
  RegisterPage.validatRegister()
});