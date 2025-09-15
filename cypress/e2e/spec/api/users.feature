Feature: User CRUD

Scenario: Retrieve all registered users
  When a GET request is sent to "/usuarios"
  Then the "get-usuario" schema is returned with HTTP status 200

Scenario Outline: Create a new user
  When a create request is submitted for a "<type>" user
  Then the "post-usuario" schema is returned with HTTP status <status>
  Examples:
    | type    | status |
    | valid   | 201    |
    | invalid | 400    |

Scenario Outline: Update an existing user
  When an update request is submitted for user "<_id>" of type "<type>"
  Then the "put-usuario" schema is returned with HTTP status <status>
  Examples:
    | type    | _id              | status |
    | valid   | eefr0Uh0El05GZrs | 200    |
    | invalid | 0000000000000000 | 400    |

Scenario Outline: Delete an existing user
  Given the user has no cart
  When a delete request is submitted for user "<_id>"
  Then the "delete-usuario" schema is returned with HTTP status <status>
  Examples:
    | _id              | status |
    | lhaM76xSBLJbBeXw | 200    |
