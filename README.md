# Sorting Game

This is a simple sorting game implemented using React. The game generates a random set of numbers and allows the user to drag and drop them into buckets in ascending or descending order. The user can then check their answer and see if it is correct or reset the game to start again.

![home](https://github.com/Roshan23R/sort-game/assets/82640582/d0e9b391-2f53-4edd-85ca-8eefb4644394)

![correct](https://github.com/Roshan23R/sort-game/assets/82640582/4362bd02-fd78-427a-8a2b-c936619601e9)

![wrong](https://github.com/Roshan23R/sort-game/assets/82640582/39e6bc0d-89e4-4136-8f87-98e60186b447)

## Table of Contents

- [Getting Started](#getting-started)
- [Components](#components)
  - [SortingGame](#sortinggame)
- [How the Game Works](#how-the-game-works)
- [Dependencies](#dependencies)
- [License](#license)

## Getting Started

To run the Sorting Game on your local machine, follow these steps:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your machine.
2. Clone the repository or download the source code files.
3. Open a terminal or command prompt and navigate to the project directory.
4. Run the following command to install the required dependencies:

   ```
   npm install
   ```

5. Once the dependencies are installed, run the following command to start the development server:

   ```
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to see the Sorting Game in action.

## Components

The Sorting Game is composed of a single component:

### SortingGame

This component represents the main game screen and manages the state of the game.

#### State

The SortingGame component manages the following state variables:

- `selectedOrder`: Stores the selected sorting order ("asc" for ascending, "desc" for descending).
- `generatedAnswer`: Stores the randomly generated set of numbers.
- `optionsPlaced`: Stores the numbers placed by the user into the buckets.
- `isCheckButtonDisabled`: Determines if the "Check" button should be disabled.
- `isCorrect`: Stores the correctness of the user's answer (null for not checked yet, true for correct, false for incorrect).
- `isAnswerShown`: Determines if the correct answer should be shown.

#### useEffect Hooks

The SortingGame component uses the following useEffect hooks:

- `useEffect(() => {}, [])`: Runs once on component mount to reset the game.
- `useEffect(() => {}, [optionsPlaced, generatedAnswer])`: Updates the state of `isCheckButtonDisabled` when options are placed or generated.

#### Event Handlers

The SortingGame component defines the following event handlers:

- `handleSortOrderChange(e)`: Handles the change event of the sort order radio buttons and updates the `selectedOrder` state.
- `checkAnswer()`: Checks the user's answer by comparing it with the sorted answer and updates the `isCorrect` and `isAnswerShown` states accordingly.
- `resetGame()`: Resets the game by resetting all state variables and generating a new set of random numbers.
- `dragStart(e)`, `dragEnd(e)`, `dragOver(e)`, `dragEnter(e)`, `dragLeave(e)`, `dragDrop(e)`: Event handlers for drag and drop functionality.
- `fillOptionsWithAnswer()`: Fills the options container with the correct answer when the user's answer is incorrect.

#### Rendering

The SortingGame component renders the following elements:

- `div.contain`: Wraps the entire game container.
- `div.container`: Contains the game elements.
- `div#head`: Displays the game heading.
- `div.sort-options`: Displays the sorting order options.
- `div.options-container`: Contains the options section.
- `div.options`: Displays the generated

 answer numbers as draggable options.
- `div.bucket-container`: Contains the buckets for dropping the options.
- `div.bucket`: Represents each bucket for sorting the options.
- `div.btn`: Contains the check and reset buttons.
- `button.check-btn`: Triggers the checkAnswer() function to check the user's answer.
- `button.reset-btn`: Triggers the resetGame() function to reset the game.
- `div.result-container`: Contains the result message.
- `div.result`: Displays the correctness message based on the user's answer.

## How the Game Works

1. The game starts by generating a set of five random numbers using the `generateRandomIntegers()` function.
2. The user can choose the sorting order by selecting either "Ascending" or "Descending" using the radio buttons.
3. The generated numbers are displayed as draggable options in the "Options" section.
4. The user can drag and drop the options into the buckets to sort them.
5. As the user drops an option into a bucket, it gets placed there, and the `optionsPlaced` state is updated.
6. The "Check" button becomes enabled when all options are placed into the buckets.
7. Clicking the "Check" button triggers the `checkAnswer()` function.
8. The `checkAnswer()` function compares the user's answer with the sorted answer based on the selected sorting order.
9. If the user's answer is correct, a success message is displayed.
10. If the user's answer is incorrect, an error message is displayed, and the correct answer is shown by filling the options with the sorted answer.
11. The user can reset the game at any time by clicking the "Reset" button, which clears the current answer, generates new random numbers, and resets the game state.

## Dependencies

The Sorting Game uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- react-dom: Provides DOM-specific methods that can be used at the top level of a web application to enable the use of React components.
- react-scripts: Configuration and scripts for Create React App.

## License

This Sorting Game is open source and released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to modify and use it to suit your needs.
