# Linear Algebra Koans

This is an interactive learning tool where you learn linear algebra by implementing core mathematical algorithms in TypeScript to make a suite of failing unit tests pass.

## Tech Stack

- Environment: Node.js
- Language: TypeScript
- Testing Framework: Vitest

## Installation

```bash
npm install
```

## Running tests

```bash
npx vitest run
```

Or for watch mode:

```bash
npx vitest
```

## How to use

The project is structured into koans (modules) located in `src/koans/`. For each koan, there are corresponding tests in `src/tests/`.

The implementation inside the function is a stub. Your goal is to write the correct implementation of the koan to pass the tests.

Above every function, there is a JSDoc comment explaining the mathematical concept and a brief hint about the algorithmic approach.
