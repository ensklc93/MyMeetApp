Feature: Specify Number of Events

 Scenario: When the user has not specified the number of event, show 32 events by default.
  Given the user is on the events page
  When the number of events to display are not specified
  Then 32 events should be displayed by default

 Scenario: User should see a list of 10 events, when they specified it to 10.
  Given the user is on the events page
  When the user specifies the number of events to display as 10
  Then 10 events should be displayed
