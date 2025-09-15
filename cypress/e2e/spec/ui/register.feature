Feature: User Register
  As a new system user
  I want to register my account
  So that I can use the member-only features.

  Background:
    Given the user is on login page

  Scenario: Successful new user registration
    When navigate to the registration page
    And fill in the registration form with new user data
    And click the "register" button
    And should see the message "Cadastro realizado com sucesso"