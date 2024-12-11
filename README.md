# Instant Notes

A simple and intuitive note-taking application built with React, leveraging Tailwind CSS for styling and local storage for persistence.

## Project Setup

1. **Clone the repository:** `git clone https://github.com/FunChosa/instant-notes.git`
2. **Navigate to the project directory:** `cd instant-notes`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm run dev`

## Features

* Create Notes: Quickly add new notes via a modal window triggered by an “Add Note” button.
* Customizable Colors: Choose from a selection of colors to personalize your notes.
* Pinning: Keep important notes at the top of the list.
* Deleting: Remove notes permanently.
* Editing: Modify existing notes’ titles, descriptions, and colors.
* Cloning: Create exact copies of notes, including their color, title and description.
* Unique Identifiers: Each note is assigned a unique UUID for reliable identification.
* Timestamping: Creation time is recorded and displayed for each note.
* Persistent Storage: Notes are saved locally using browser’s localStorage, ensuring data     is preserved across sessions.


## Technology Stack

* React: ^18.3.1
* Tailwind CSS: ^3.4.15
* Moment.js: ^2.30.1
* React Icons: ^5.3.0
* React Modal: ^3.16.1
* UUID: ^11.0.3
* Vite: ^5.4.10

## State Management

The application's state is managed using the `useState` hook.

## Data Storage

The application utilizes the browser’s localStorage for persistent data storage. This means your notes will be saved even after closing and reopening the browser.

## Deployment

The application is deployed on Netlify: https://funchosa-instant-notes.netlify.app

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
