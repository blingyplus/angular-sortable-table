# Angular Sortable, Paginated, Searchable, and Responsive Table

This project is a simple Angular application that features a sortable, paginated, and searchable table. The table is also responsive and styled using Tailwind CSS. The data is fetched from a public RESTful API (JSONPlaceholder).

## Features

- **Sortable Columns**: Click on the column headers to sort the data.
- **Pagination**: Navigate through pages of data.
- **Search**: Filter the data using the search box.
- **Responsive Design**: The table is designed to be responsive and visually appealing.

## Technologies Used

- Angular
- Angular Material
- Tailwind CSS
- JSONPlaceholder API

## Getting Started

### Prerequisites

- Node.js
- Angular CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/blingyplus/angular-sortable-table.git
   cd angular-sortable-table
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

### Sorting

Click on the column headers to sort the data in ascending or descending order.

### Pagination

Use the paginator at the bottom of the table to navigate through pages of data. The page size options are dynamically calculated based on the total number of records.

### Search

Type in the search box to filter the data. The table updates in real-time as you type.

## Project Structure

- `src/`
  - `app/`
    - `sortable-table/`
      - `sortable-table.component.html` - The HTML template for the table component.
      - `sortable-table.component.ts` - The TypeScript logic for the table component.
      - `sortable-table.component.scss` - The SCSS styles for the table component.
    - `app.component.html` - The root component template.
    - `app.component.ts` - The root component logic.
  - `assets/` - Static assets for the project.
  - `environments/` - Environment configuration.

## Tailwind CSS Configuration

Tailwind CSS is configured in the `tailwind.config.js` and included in the `styles.scss`.

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```scss
// styles.scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```
