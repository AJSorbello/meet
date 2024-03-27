Feature: Specify Number of Events

    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given the NumberOfEvents component is rendered
        Then the user should see 32 events displayed by default

    Scenario: User can change the number of events displayed
        Given the NumberOfEvents component is rendered
        When the user specifies a different number of events
        Then the number of events displayed should update accordingly
        And the user should see the specified number of events displayed
