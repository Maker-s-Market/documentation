---
sidebar_position: 3
---

# Introduction

This section contains all the documentation related to the scripting and dependencies of the front-end. 

## Scripts

### `npm install`
- Description: Installs all dependencies listed in the <code>package.json</code> file in the local node_modules folder.

### `npm run dev`
- Description: Runs the Vite development server on `http://localhost:5173`
- Command: `vite`

### `npm run build`
- Description: Builds the project for production using Vite, optimizing the build for best performance. 
- Command: `vite build`

### `npm run lint`
- Description: Lints JavaScript and JSX files using ESLint with specific configurations.
- Command: `eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0`

### `npm run preview`
- Description: Starts the Vite preview server on `http://localhost:4173/`
- Command: `vite preview --host`