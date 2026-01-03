# GEMINI Project Analysis: AGMusicPlayer

## Project Overview

This is a **React** project named **AGMusicPlayer**, bootstrapped using the **Vite** tooling. It is written in **TypeScript**.

Based on the initial file structure, this appears to be a brand-new project created from the standard `vite-react-ts` template. The main application component (`src/App.tsx`) contains the default placeholder content. No specific features for a music player have been implemented yet.

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Language:** TypeScript
- **Package Manager:** npm

## Building and Running

### 1. Install Dependencies

First, install the necessary npm packages:

```sh
npm install
```

### 2. Run the Development Server

To run the app in development mode with Hot Module Replacement (HMR):

```sh
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### 3. Build for Production

To compile the TypeScript code and create a production-ready build:

```sh
npm run build
```

The output files will be placed in a `dist` directory.

### 4. Preview the Production Build

To serve the production build locally for previewing:

```sh
npm run preview
```

## Development Conventions

### Linting

The project uses **ESLint** for code linting. To run the linter on the entire codebase, use:

```sh
npm run lint
```

The configuration can be found in `eslint.config.js`.

### Component Structure

The code currently uses React functional components with hooks (e.g., `useState`). The main application entry point is `src/main.tsx`, which renders the root `App` component.
