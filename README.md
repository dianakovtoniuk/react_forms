# React Forms

A project built with React and TypeScript that shows different ways to build forms and validate user input. The app has a login form and a signup form. The same login form is built in three ways, so you can compare the approaches.

## Features

- Login form built with refs
- Login form built with state, where every input is a controlled component
- Login form built with a reusable `Input` component and a custom `useInput` hook
- Validation on blur: an error appears only after the user leaves the field, and disappears when the user starts typing again
- Signup form with native browser validation (`required`, `minLength`)
- Check that the password and its confirmation match
- Signup form that reads all values at once with `FormData`
- Signup form built with the React form action and `useActionState`, with a list of validation errors
- Entered values are kept in the form after a failed submit

## Tech Stack

- React 19
- TypeScript
- Vite
- Plain CSS

## React Concepts Used

- Controlled inputs with `useState`
- Reading input values with `useRef`
- Reading all form values with `FormData` and `Object.fromEntries`
- Form actions with `useActionState` (React 19)
- `defaultValue` and `defaultChecked` to restore entered values after a failed submit
- A custom `useInput` hook that holds the value, the "was edited" state and the validation result
- A reusable `Input` component that passes the rest of its props to the native input
- Derived values calculated from state instead of storing them separately
- Validation helper functions in a separate module
- Typed props, form events, refs, form state and reusable hooks

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository with `git clone https://github.com/dianakovtoniuk/react_forms.git`
2. Go to the project folder with `cd react_forms`
3. Install dependencies with `npm install`
4. Start the development server with `npm run dev`

The app will be available at http://localhost:5173. Submitted data is printed to the browser console.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in the `dist` folder
- `npm run preview` serves the production build locally

## Project Structure

- `public/` static files
- `src/`
  - `assets/` logo image
  - `components/`
    - `Header.tsx` page header
    - `Input.tsx` reusable input with a label and an error message
    - `Login.tsx` login form built with refs
    - `StateLogin.tsx` login form built with `useInput` and the `Input` component
    - `Signup.tsx` signup form built with `useActionState`
  - `hooks/`
    - `useInput.ts` hook for an input value and its validation
  - `util/`
    - `validation.ts` validation helper functions
  - `App.tsx` root component
  - `main.tsx` application entry point
  - `index.css` global styles
  - `vite-env.d.ts` Vite type declarations
- `index.html` HTML template
- `tsconfig.json` TypeScript configuration
- `vite.config.js` Vite configuration

## Notes

This project is meant for learning, so it keeps several versions of the same form. `App.tsx` renders only one form at a time. To see another one, change the component inside `<main>`.

Passwords are only printed to the console and are never sent anywhere. There is no backend in this project.
