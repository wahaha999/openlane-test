# User Profile Management (OpenLane test)

## Overview

This project is a Single Page Application developed using React, TypeScript, Material-UI, and Vite. It allows for the creation, viewing, editing, and deletion of user profiles. All data is stored in and loaded from the browser's local storage. The application features a login system, profile creation, and the ability to edit and delete profiles.

## Features

- **Login Screen:** Enter email and password to access a user profile. Includes session timeout and a link to create a new profile.
- **Create Profile:** A form to input profile data including email, password, full name, phone number, and favorite color.
- **View Profile:** Displays profile information with options to edit or delete the profile.
- **Edit Profile:** Allows editing of any profile data with options to save changes or cancel.
- **Delete Profile:** Option to delete a profile with a confirmation prompt.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A modern web browser.

### Installation

1. Clone the repository:
   ```bash
   git clone [Your-Repository-URL]
   ```
2. Navigate to the project directory:
   ```bash
   cd [Project-Directory]
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Accessing the Application

- Open your web browser and navigate to `http://localhost:5173` (or the port provided in your terminal).
- The application should now be running and accessible.

## Usage

- **Login:** Use an existing profile's email and password to log in.
- **Create Profile:** Accessible from the login screen to create new profiles.
- **View/Edit/Delete Profile:** Accessible after logging in with a valid profile.

## Local Storage Data Structure

Profiles are stored in local storage in the following format:
```json
{
  "profiles": [
    {
      "email": "example@email.com",
      "password": "Password123!",
      "fullName": "John Doe",
      "phoneNumber": "+15615128712",
      "favoriteColor": "blue"
    }
    // ... other profiles
  ]
}
```

## Notes

- Security is not a primary concern in this challenge; the focus is on functionality and data handling.
- Email addresses are unique identifiers for each profile.
- A login session times out after 60 seconds of inactivity.
- The UI is built using Material-UI components for a clean and user-friendly experience.

## Future Enhancements

- Implement more robust error handling and validation.
- Add responsiveness for mobile and tablet viewports.
- Integrate testing frameworks for unit and integration tests.