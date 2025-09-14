Feature: User Authentication
 The system must authenticate users and return a valid token for successful login attempts.


Scenario: Successful login with valid credentials
   When user sends a post request with "valid" credentials
   Then should be returned the schema "post-login" with status code 200

Scenario Outline: Login with invalid credentials
   When user sends a post request with "<type>" credentials
   Then should be returned the schema "post-login" with status code <status>
    Examples:
        | type    | status |
        | invalid | 401    |
        | empty   | 400    |