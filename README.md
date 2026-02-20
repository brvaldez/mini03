# Grocery List App

A simple React app for managing grocery items with add, edit, remove, and quick suggestion features.

## Live Link  
https://grocery-list-project03.netlify.app/

## Description

This project is a clean and beginner-friendly React application.
Users can add grocery items manually, add from suggestion buttons, edit existing items, and remove items from the list.

The project demonstrates component-based structure and basic React state management with `useState`.

## Project Structure

### `main.jsx`
Entry point of the app. Renders `App` into the root element.

### `App.jsx`
Main wrapper component. Loads the `GroceryList` component.

### `components/GroceryList.jsx`
Handles the main app logic:

- Stores grocery items in state
- Adds new items from the form
- Adds quick items from suggestions
- Updates existing items
- Removes items
- Controls edit mode state

### `components/GroceryItemRow.jsx`
Represents one grocery item row.
Shows the item text and action buttons (`Edit`, `Remove`), and the edit input with `Save`/`Cancel`.

### `components/SuggestionButtons.jsx`
Renders reusable suggestion buttons (like Milk, Bread, Eggs) and adds them to the list on click.

## Features

- Add grocery items
- Edit grocery items
- Remove grocery items
- Add from quick suggestions
- Simple and clean UI

## Array Methods Used

- `map()` -> render items and suggestion buttons
- `filter()` -> remove items from the list

## Component-Based Design

The app is split into reusable components:

- `App` (main wrapper)
- `GroceryList` (state and logic)
- `SuggestionButtons` (quick add actions)
- `GroceryItemRow` (single item UI and actions)
