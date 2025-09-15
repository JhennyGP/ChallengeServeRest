 Feature: User Authentication
  As a new system user
  want to log into my account
  So that can use the member-only features.

  Scenario: Login with a valid user
    Given a user is already registered via UI
    When the user is on login page
    And fill in the email and password with registered user credentials
    And click the "login" button
    Then should be redirected to the "home" page