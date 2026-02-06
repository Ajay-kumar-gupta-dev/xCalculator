# xcalculator: AI Coding Agent Instructions

## Project Overview
**xcalculator** is a React-based calculator application bootstrapped with Create React App. The project is in early development with a partially implemented Calculator component (`src/Calculator`).

## Architecture & Components

### Current Structure
- **`src/App.js`** - Root component (currently displays boilerplate Create React App content)
- **`src/Calculator`** - Calculator component with incomplete implementation (has TypeErrors: "Recat" typo, incorrect `useState` destructuring)
- **`public/index.html`** - Entry point for the React app

### Expected Implementation Pattern
The Calculator component should follow a state-driven React pattern:
- Use React hooks (`useState`) to manage calculator state: `expression` (input/display) and `result` (calculated output)
- Event handlers like `handleButtonClick` should parse button values (numbers, operators, "C" for clear)
- Integrate Calculator into `App.js` to render in the main application

## Critical Developer Workflows

### Build & Development
```bash
npm start        # Dev server on http://localhost:3000 (auto-reload enabled)
npm test         # Jest test runner in interactive watch mode
npm run build    # Production build to /build folder
```

### Testing
- Test setup uses `@testing-library/react` (React 19, Testing Library v16)
- Test files colocated with source: `App.test.js` for `App.js`
- Tests use React queries (e.g., `getByText`, `getByRole`) for user-centric testing
- See `setupTests.js` for test configuration

## Code Conventions & Patterns

### React Component Style
- Functional components with hooks (not class components)
- Arrow functions for event handlers: `const handleX = (param) => { ... }`
- State declarations: `const [state, setState] = useState(initialValue)`

### Known Issues to Address
1. **`src/Calculator` typos**: "Recat" → "React", `usestate` → `useState`
2. **Missing implementation**: `handleButtonClick` is incomplete; needs full calculator logic
3. **Integration**: Calculator component not imported/rendered in `App.js`

### ESLint Configuration
- Extends `react-app` and `react-app/jest` presets (configured in `package.json`)
- Follow standard CRA linting rules

## Key Dependencies
- **React 19.2.4** - UI framework
- **react-scripts 5.0.1** - CRA build toolchain
- **@testing-library/react 16.3.2** - Component testing

## Integration Points
- Entry point: `public/index.html` renders React to `<div id="root">`
- `src/index.js` mounts React app at this root element
- Performance monitoring: `reportWebVitals()` available for metrics

## Tips for Productivity
- Run `npm start` first to catch errors early
- Check `src/setupTests.js` before writing tests (global test configuration)
- Calculator logic should follow standard operator precedence patterns
- Use React DevTools browser extension to debug state management
