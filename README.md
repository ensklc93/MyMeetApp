# The MyMeetApp Project
This project was created to learn "Testing in the Development Process" and to showcase my newly learned skills. 

## Objective
The aim of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.  

## Project Dependencies
Programming language is JavaScript.  
The framework used is React.  
TDD technique is used for testing.  
The application also uses Google Calendar API and OAuth2 authentication flow.  

### Feature: Filter Events by City
#### User Story:
As a user,  
I should be able to filter events by city  
So that I can see a list of events taking place in that city.

#### Scenario 1
- Given user hasn’t searched for any city;
- When the user opens the app;
- Then the user should see a list of upcoming events.

#### Scenario 2
- Given the main page is open;
- When user starts typing in the city textbox;
- Then the user should receive a list of cities (suggestions) that match what they’ve typed.

#### Scenario 3
- Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., “Berlin, Germany”) from the list;
- Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature: Show/Hide Event Details
#### User Story:
As a user,  
I should be able to click on a specific event detail,   
so I can see more or less details on a specific event by clicking.  

#### Scenario 1
- Given the user is on the events page
- When the events are displayed
- Then the event details should be collapsed by default

#### Scenario 2
 - Given the user is on the events page
 - When the user clicks on an event
 - Then the event details should be expanded 

#### Scenario 3
 
 - Given the event details are expanded
 - When the user clicks on the event again
 - Then the event details should be collapsed 

### Feature: Specify Number of Events
#### User Story:
As a user,  
I should be able to decide how many events are displayed,  
so I can have a better overview of the events without much distractions.

#### Scenario 1
-  Given the user is on the events page
-  And the user has not specified the number of events to display
-  Then 32 events should be displayed by default 

#### Scenario 2
- Given the user is on the events page
- When the user specifies the number of events to display as 10
- Then 10 events should be displayed

### Feature: Use the App When Offline
#### User Story:
As a user,  
I should be able to use the app offline,  
so that I can use it independently of an internet connection. 

#### Scenario 1
- Given the user is offline
- When the user opens the app
- Then the app should show cached data 

#### Scenario 2
- Given the user is offline
- When the user tries to change the search settings
- Then the app should show an error message 

### Feature: Add an App Shortcut to the Home Screen
#### User Story:
As a user,   
I should be able to add the app shortcut to the home screen of the device I use,   
so that I can be able to interact/use with the app easier and faster.

#### Scenario
- Given the user is on the app installation page
- When the user chooses to add the app to the home screen
- Then the app should be added as a shortcut on the device home screen 

### Feature: Display Charts Visualizing Event Details
#### User Story:
As a user,   
I should be able to see the charts of upcoming events in each city,   
so that I have a visual feedback and understanding of the upcoming events in each city.

#### Scenario
- Given the user is on the events page
- When the user views the event statistics
- Then the app should display a chart with the number of upcoming events in each city


    





