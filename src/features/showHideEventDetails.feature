Feature: Show/Hide Event Details

    Background:
        Given the app is open
        And the user is viewing a list of events on the app

    Scenario: An event element is collapsed by default
        Then each event's details are initially collapsed

    Scenario: User can expand an event to see details
        Given an event is listed with collapsed details
        When the user clicks on the event to expand details
        Then the event details are displayed

    Scenario: User can collapse an event to hide details

        Given the user sees the details of an event
        When the user clicks on the event to collapse details
        Then the event details are hidden