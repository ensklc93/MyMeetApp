Feature: Show/Hide Event Details

    Scenario: When the user is on the events page, don’t show the event details.
        Given the user is on the events page
        When the events are displayed
        Then the event details should be collapsed by default

    Scenario: When the user clicks on an event, show the details of the clicked event.
        Given the user is on the events page
        When the user clicks on an event
        Then the event details should be expanded

    Scenario: When the user click on an event a second time, hide the details of the event.  
        Given the event details are expanded
        When the user clicks on the event again
        Then the event details should be collapsed
