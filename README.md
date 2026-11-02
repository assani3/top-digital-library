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
- The `Library` class creates and stores `Book` instances in an array
- The UI renders book cards from the library's collection after changes
- Each book card includes a `Remove` button and a `Read` toggle button
- The read status belongs to each `Book` and can be toggled between read and unread

## Installation

1. Clone the repository or download the files
2. Open `index.html` in your browser
3. Click `Add Book` to open the modal form

## Usage

- Click the `Add Book` button to open the modal
- Enter the book title, author name, and page count
- Submit the form to add a book to the library
- Click `Remove` to remove a book from the library
- Click `Read` or `Unread` to toggle that book's status

## Notes

- The project is intentionally simple and does not persist data between page reloads
- Book IDs are assigned sequentially by the `Library` and remain unique for the current page session
- Book details are inserted into the page as text, not interpreted as HTML

## Odin Project Assignment Alignment

This project follows the Odin Project Library lesson goals by:

- Using `Book` and `Library` classes to model books and their collection
- Separating book data and collection management from DOM rendering logic
- Allowing users to remove books from the library
- Enabling read status toggles for individual books

## Future improvements

- Persist the library between page reloads
- Add validation messages or user feedback for invalid form input
