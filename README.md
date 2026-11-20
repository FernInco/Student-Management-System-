# Student Management System

A simple, responsive Student Management System built using **HTML, CSS, and Vanilla JavaScript**. This project allows users to manage student records through an intuitive interface, with data persistence using the browser's localStorage.

## Features

- **Add Students:** Register students with their name, roll number, and course.
- **View Students:** Display registered students in an organised table.
- **Search Students:** Search records by name, roll number, or course.
- **Delete Students:** Remove individual student records.
- **Duplicate Validation:** Prevent registration using an existing roll number.
- **Dynamic Statistics:** Automatically track total students and unique courses.
- **Persistent Storage:** Save and retrieve student records using localStorage.
- **Responsive Design:** Interface adapts to different screen sizes.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive layout |
| JavaScript (ES6+) | Application logic and DOM manipulation |
| localStorage | Browser-based data persistence |
| JSON | Data serialisation and parsing |

## Project Structure

```text
student-management-system/
│
├── index.html
├── style.css
│
└── main.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd student-management-system
```

### 3. Run the application

Open `index.html` in your browser, or use the VS Code Live Server extension.

## How It Works

- Student records are maintained in a JavaScript array.
- DOM manipulation dynamically generates the student directory.
- Array methods such as `filter()`, `find()`, `map()`, and `splice()` handle searching, validation, statistics, and deletion.
- `JSON.stringify()` and `JSON.parse()` convert data between JavaScript objects and JSON strings.
- Browser localStorage preserves records between page refreshes.

## Current Limitations

- Data is stored locally in the browser.
- Records are not synchronised between devices or users.
- No backend or database integration.
- Editing existing student records is not currently supported.

## Learning Outcomes

This project helped me practise:

- JavaScript fundamentals and ES6+ syntax.
- DOM manipulation and event handling.
- Objects, arrays, and array methods.
- Functions and code organisation.
- JSON and browser storage.
- Form handling and input validation.

## Future Improvements

- Edit existing student records.
- Backend and database integration.
- User authentication.
- Export student records.
- Improved form validation.

## Author

Developed as a personal learning project to strengthen my frontend development and JavaScript fundamentals.

---

**Built with HTML, CSS, and JavaScript.**
