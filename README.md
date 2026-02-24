# Age Calculator 🎂

A simple Age Calculator built with HTML, CSS, and JavaScript. Users can select their date of birth and instantly see their exact age in years, months, and days.

## Features

- Date picker input for selecting birth date
- Calculates:
  - Years
  - Months
  - Days
- Handles month and day adjustments correctly
- Prevents empty submission
- Basic future-date safety handling

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS)

## How It Works

1. The user selects their date of birth using the date input field.
2. When the "Get Your Age" button is clicked:
   - If no date is selected, an alert prompts the user to choose a date.
   - The script calculates the difference between today’s date and the selected birth date.
3. The result displays the exact age in years, months, and days.

The calculation:
- Compares the birth date with the current date.
- Adjusts months and days if the difference results in negative values.
- Uses a helper function to correctly determine the number of days in a month.

## Project Structure

```
/project-folder
│
├── index.html
├── style.css
└── script.js
```

## Example Output

```
You have 25 years 3 months and 12 days old
```

## Notes

- The app uses the browser’s built-in date picker.
- Age is calculated based on the user’s local system date.
- Future birth dates are handled safely and will not return negative values.

## Possible Improvements

- Add live calculation on date change
- Display next birthday countdown
- Improve UI styling and animations
- Add dark mode
- Add support for keyboard submission

---

Feel free to use, modify, or expand this project as needed.
