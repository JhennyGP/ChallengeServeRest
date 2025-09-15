Feature: User Logout
  As a logged-in user
  I want to logout of my account
  So that I can end my session securely

  Scenario: Logout from the home page
    Given a user is already registered via UI
    And the user is on login page
    And fill in the email and password with registered user credentials
    And click the "login" button
    When click the "logout" button to exit
    Then should be redirected to the "login" page
