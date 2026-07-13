Feature: Add Badge

  Scenario: npm package
    Given the project is hosted on "github.com"
    And the project publishes an npm package
    When the project is lifted
    Then the socket badge is defined
