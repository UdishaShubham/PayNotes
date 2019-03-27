Feature: Create Note

    Scenario: Login
        Given I open "/"
        And I set username as "user@example.com" and password as "1234"
        When I click on login button
        Then I expect to login and the url to be "http://localhost:3000/#/notes"

    Scenario: Open create note modal
        Given I click on add new note
        Then I expect create note modal to open

    Scenario: Close create note modal
        When I close the create note modal
        Then I expect the create note modal to close

    Scenario: Cancel create note
        Given I click on add new note
        When I cancel the create note modal
        Then I expect the create note modal to close

    Scenario: Create Note
        Given I click on add new note
        When I create note with header as "Hello" and text as "Hello World"
        Then I expect the note to be created with header as "Hello"

    Scenario: Logout
        When I click on logout button
        Then I expect to logout and the url to be "http://localhost:3000/#/"
