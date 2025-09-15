/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import HomePage from '../../pages/HomePage';

Given('the user is on login page', () => {
  cy.visit('https://front.serverest.dev/login');
});

When('fill in the email and password with registered user credentials', () => {
  cy.get('@createdUser').then(user => {
    LoginPage.fillEmail(user.email);
    LoginPage.fillPassword(user.password);
  });
});

When('click the {string} button', (buttonName) => {
  switch (buttonName.toLowerCase()) {
    case 'register':
      RegisterPage.clickRegister();
      break;
    case 'login':
      LoginPage.clickLogin();
      break;
    case 'logout':
      HomePage.clickLogout();
      break;
    default:
      throw new Error(`Button "${buttonName}" not recognized`);
  }
});