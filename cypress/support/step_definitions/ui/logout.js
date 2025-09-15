/// <reference types="cypress" />
import { When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from '../../pages/HomePage';

When('click the {string} button to exit', () => {
  HomePage.clickLogout();
});
