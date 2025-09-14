Feature: User Authentication
  The system must authenticate users and return a valid token for successful login attempts.

  Scenario: Successful login with valid credentials
    Given a user with a valid email and password
    When the user sends a POST request to "/login"
    Then the response status code should be 200
    And the response body should contain the message "Login realizado com sucesso"
    And the response body should contain a valid "authorization" token

  Scenario Outline: Login with invalid credentials
    Given a user with "<type>" credentials
    When the user sends a POST request to "/login"
    Then the response status code should be <status>
    And the response body should contain the message "<message>"

    Examples:
      | type     | status | message                      |
      | invalid  | 401    | Email e/ou senha inválidos   |
      | empty    | 400    | Email e/ou senha são obrigatórios |
