# The MyMeetApp Project
MyMeetApp is a web application designed to help users manage and view events. It integrates with Google Calendar to fetch and display events, allowing users to filter events by city and view event details.

## Objective
The aim of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.  

## Installation Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/MyMeetApp.git
   cd MyMeetApp
   ```

2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Set Up Environment Variables:**
    - Create a **config.json** file in the **auth-server** directory with your Google API credentials.

4. **Start the Development Server:**
    ```bash
    npm start
    ```

## Usage
Once the project is set up, you can use MyMeetApp to:

- View a list of upcoming events.
- Search for events in specific cities.
- View detailed information about each event.
- Visualize event genres and city-specific events through charts.
- Use the app offline with cached data.

## Technologies Used

- **React:** Frontend library for building the user interface.
- **Bootstrap:** CSS framework for responsive design.
- **Node.js:** Backend runtime for server-side logic.
- **AWS Lambda:** Serverless functions for handling API requests.
- **Google Calendar API:** Fetches event data.
- **Recharts:** Library for creating charts.
- **Jest:** Testing framework for unit and integration tests.
- **Puppeteer:** End-to-end testing.

## Features

- **Event List:** Displays a list of upcoming events.
- **City Search:** Allows users to search for events in specific cities.
- **Event Details:** Users can view more details about each event.
- **Event Genres Chart:** Visual representation of event genres.
- **City Events Chart:** Visual representation of events per city.
- **Offline Support:** The app can function offline using cached data.

## License

This project is licensed under the ISC License.