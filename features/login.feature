Feature: Login 

  Scenario: Verify User is Able to Login
    Given the login screen is shown
    When I log in
    Then a confirmation message should be shown