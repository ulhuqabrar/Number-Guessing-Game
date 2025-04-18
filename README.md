# 🎯 Number Guessing Game

A fun and interactive number guessing game built with **HTML**, **CSS**, and **JavaScript**. The user is challenged to guess a randomly generated number between a defined range — with helpful hints and real-time feedback after each guess!

Perfect for beginners learning loops, conditionals, user input handling, and DOM interaction through popups.

---

## 📌 Overview

In this game, the computer secretly picks a number between **1 and 100**, and your mission is to guess it. You’ll receive feedback if your guess is **too low**, **too high**, or **correct**, and the number of attempts will be tracked and displayed when you win.

---

## ✨ Features

- 🎲 Generates a new secret number on every reload
- 🔄 Unlimited guessing until correct
- 📈 Tracks and displays total number of attempts
- 🚫 Input validation (ensures the guess is a number within the allowed range)
- 💡 Real-time feedback through alert messages

---

## 📁 Project Structure

```
random-number-guessing-game/
│
├── index.html      # Optional HTML shell (if running in browser window)
├── style.css       # Optional CSS for additional styling
└── index.js        # Core JavaScript game logic
```

> Note: The game can be run entirely in the browser using just `index.js` via developer console or with basic HTML for UI.

---

## 🧠 How It Works

1. The game initializes by generating a random number between `1` and `100`:
   ```js
   const answer = Math.floor(Math.random() * (maxnum - minum + 1)) + minum;
   ```

2. It then enters a `while` loop where:
   - The user is prompted to input a number.
   - Input is validated to ensure it’s numeric and within range.
   - The guess is compared with the secret number.
   - Hints are shown: "TOO HIGH" / "TOO LOW".
   - Once correct, the total number of attempts is shown.

3. The game ends when the correct number is guessed.

---

## 🛠️ Technologies Used

- **JavaScript (Vanilla)** – for game logic and interactivity
- **HTML5 (optional)** – to create a browser-based UI
- **CSS3 (optional)** – for styling if a visual UI is added

---

## 🖥️ How to Run

There are two ways to run this game:

### ✅ Option 1: Using Browser Console
1. Open your browser (Chrome, Firefox, etc.).
2. Open Developer Tools (Right-click > Inspect > Console).
3. Paste the full game code into the console and press `Enter`.
4. The game will begin using `prompt()` and `alert()` boxes.

### ✅ Option 2: With an HTML Page
Create a simple `index.html` with a `<script src="index.js"></script>` tag and open the file in your browser.

---

## 💡 Suggested Enhancements

Want to take it further? Try adding:

- 🎨 A visual interface with input boxes and buttons
- 📊 Leaderboard or score tracker
- 🧮 Custom range (user-defined min & max)
- ⏱️ Timer to track how fast the guess was made
- 🔁 Option to play again without refreshing

---

## 🤝 Contributions

Pull requests and suggestions are welcome. If you’re learning JavaScript or building portfolio projects, this is a great one to experiment with and personalize!

---

## 📄 License

This project is licensed under the **MIT License**

---

## 🙌 Final Thoughts

This simple number guessing game demonstrates core JavaScript skills like loops, conditionals, and user input handling. It’s perfect for students, bootcampers, or hobbyists building up their logic and frontend confidence.

Happy guessing! 🎉
