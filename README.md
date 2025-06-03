# Todo-List

A simple and interactive Todo List application built with React and Vite. Add, manage, and complete your daily tasks with ease.

## Features

- **Add Tasks**: Quickly add tasks using the input box and either click the add button or press Enter/Tab.
- **Delete Tasks**: Remove any task with a single click.
- **Mark Tasks**: Mark tasks as done (line-through) or undone, individually or all at once.
- **Keyboard Support**: Press Enter or Tab to add a task for fast workflow.
- **Responsive UI**: Clean, centered layout with styled components.
- **Persistent Unique Tasks**: Each task is uniquely identified using `uuid`.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher is recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/sagarsatyarthimishra/Todo-List.git
cd Todo-List
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

### Build

To build the app for production:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
.
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── src
│   ├── App.jsx
│   ├── TudoList.jsx
│   ├── main.jsx
│   ├── App.css
│   ├── index.css
│   └── assets
│       └── tudo.png
```

- **App.jsx**: Main app layout and styling.
- **TudoList.jsx**: All todo logic (add, delete, mark, unmark).
- **main.jsx**: Entry point, renders the app.
- **assets/**: Icons and images.

## Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [uuid](https://www.npmjs.com/package/uuid)
- [Font Awesome](https://fontawesome.com/) (CDN in `index.html`)

## Linting

Lint the project:

```bash
npm run lint
# or
yarn lint
```

## License

This project is licensed under the MIT License.

---

Feel free to contribute or customize!
