# Project Objective

The objective of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application utilizes the Google Calendar API to fetch upcoming events.
# Project Features

This README outlines the features and corresponding user stories of the project.

## User Stories

| User Story | Description | Outcome |
| --- | --- | --- |
| User Story 1 | As a user, I should be able to show/hide event details | I can focus on relevant information without clutter |
| User Story 2 | As a user, I should be able to specify the number of events I want to see | I can manage the amount of information displayed based on my preferences |
| User Story 3 | As a user, I should be able to use the app when offline | I can access event information even without an internet connection |
| User Story 4 | As a user, I should be able to add an app shortcut to the home screen | I can quickly access the app without going through multiple steps |
| User Story 5 | As a user, I should be able to display charts visualizing event details | I can easily understand and analyze the data in a graphical format |
| User Story 6 | As a user, I should be able to filter events by city | I can easily find events in a specific location |

## Gherkin Scenarios

| Feature | Scenario | Given | When | Then |
| --- | --- | --- | --- | --- |
| Show/Hide Event Details | User toggles event details visibility | the event details are displayed | the user selects to hide the event details | the event details should be hidden from view |
| Specify Number of Events | User sets the number of events to display | the user is viewing event listings | the user specifies to display a certain number of events | the app should show only the specified number of events |
| Use the App When Offline | User accesses the app without internet connection | the user has previously accessed the app | the user opens the app without internet connection | the app should display cached event data and functionalities that do not rely on internet connectivity |
| Add an App Shortcut to the Home Screen | User adds app shortcut to home screen | the user is on the app's homepage | the user selects the option to add a shortcut to the home screen | the app shortcut should be added to the device's home screen |
| Display Charts Visualizing Event Details | User views event details in chart format | the user is viewing event details | the user selects the option to view event details in a chart | the app should display charts visualizing the event data |
| Filter Events by City | User filters events by a specific city | the user is viewing event listings | the user selects a specific city to filter events | the app should display only the events taking place in the selected city |
