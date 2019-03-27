Feature: Edit Note

    Scenario: Login
        Given I open "/"
        And I set username as "user@example.com" and password as "1234"
        When I click on login button
        Then I expect to login and the url to be "http://localhost:3000/#/notes"

    Scenario: Open edit note modal
        Given I click on note with header as "Hello" to edit
        Then I expect edit note modal to open

    Scenario: Edit note
        Given I click on edit note button
        When I create note with header as "Hi" and text as "Hi There"
        Then I expect the note to be created with header as "Hi"

    Scenario: Cancel edit note
        Given I click on note with header as "Hi" to edit
        And I click on edit note button
        When I cancel the create note modal
        Then I expect the edit button to appear

    Scenario: Close edit note
        When I close the create note modal
        Then I expect the create note modal to close

    Scenario: Delete Note
        Given I click on note with header as "Hi" to edit
        When I delete the note
        Then I expect the note to be deleted

    Scenario: Logout
        When I click on logout button
        Then I expect to logout and the url to be "http://localhost:3000/#/"
