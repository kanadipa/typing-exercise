# Typing Exercise

A minimal, high-focus typing game that measures how many characters you can type **perfectly before your first mistake**.

## ✨ Overview

Typing Exercise is designed around a single idea:

> Accuracy > Speed

Instead of tracking WPM, it tracks **error-free character streaks**, encouraging deliberate, focused typing.

---

## 🚀 Features

- ✅ Real-time character validation
- 🔢 Correct character count (until first mistake)
- ❌ Mistake detection with exact substring
- 🧠 Randomized sentences
- 🔁 Instant reset & retry loop
- 🎯 Clean, distraction-free UI

---

## 🧠 How It Works

- Input is compared **character-by-character**
- The moment a mismatch occurs:
  - Input is "frozen"
  - Error index is recorded
- Metrics derived:
  - `correctCount = errorIndex ?? input.length`
  - `mistakeString = input.slice(errorIndex)`

---

## 🏗️ Tech Stack

- React (Hooks)
- TypeScript
- TailwindCSS

---

## 📁 Structure
- src/
- App.tsx # Core game logic + UI
- index.tsx


---

## 🎯 Why This Project

This project demonstrates:

- precise state modeling
- deterministic input validation
- UX clarity for real-time feedback loops
- clean UI composition

---

## 🔮 Possible Extensions

- global leaderboard
- streak tracking
- timed mode
- multiplayer race mode
- heatmap of common mistakes

---

## 🧪 Running Locally

```bash
npm install
npm run dev