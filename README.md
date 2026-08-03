# Library

A small Library app built as part of The Odin Project JavaScript curriculum.

## Overview

This project extends the Book example into a mini-library application. The goal is to manage a collection of books through a simple user interface, demonstrating the separation between data storage and display logic.

## Features

- Add new books using a modal form
- Display each book as a card in the library layout
- Remove books from the library
- Mark books as read
- Responsive layout for smaller screens

## How it works

- The UI is built with `HTML`, `CSS`, and `JavaScript`
- A modal form lets users enter the book title, author, and page count
- When submitted, JavaScript creates a new book card and adds it to the library display
- Each book card includes a `Remove` button and a `Read` toggle button
- The `Read` button updates the card state and prevents repeated toggles

## Installation

1. Clone the repository or download the files
2. Open `index.html` in your browser
3. Click `Add Book` to open the modal form

## Usage

- Click the `Add Book` button to open the modal
- Enter the book title, author name, and page count
- Submit the form to add the book to the `.books-container`
- Click `Remove` to delete the book card
- Click `Read` to mark the book as read

## Notes

- The project is intentionally simple and does not persist data between page reloads
- The underlying data model can be extended with a `Book` constructor and array storage to match the Odin Project assignment more closely
- A good next step is to add a unique `id` to each book object and use data attributes to associate DOM elements with book data

## Odin Project Assignment Alignment

This project follows the Odin Project Library lesson goals by:

- Providing a modal form for adding new books
- Separating book creation logic from DOM rendering logic
- Allowing users to remove books from the library
- Enabling read status changes for individual books

## Future improvements

- Add a `Book` constructor and store books in an array
- Generate unique `id` values using `crypto.randomUUID()`
- Re-render the library from the array when books are added or removed
- Add read status logic to book objects rather than only the card UI
- Add validation messages or user feedback for form input
