Feature: Application title test

    Scenario: Title is correct
        Given I open "/"
        Then I expect the title to be "PayNotes"

    Scenario: Login
        Given I set username as "user@example.com" and password as "1234"
        When I click on login button
        Then I expect to login and the url to be "http://localhost:3000/#/notes"

    Scenario: Logout
        When I click on logout button
        Then I expect to logout and the url to be "http://localhost:3000/#/"