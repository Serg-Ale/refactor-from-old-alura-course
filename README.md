# Organo - Modern React Application 🚀

A comprehensive modernization of Alura's original React course project. This version transforms a basic application into a production-ready, professional-grade codebase by integrating cutting-edge tools and best practices.

-----

## ✨ Key Features & Enhancements

This project showcases a complete overhaul of a legacy React application, demonstrating a modern, efficient, and maintainable development workflow.

  * **⚡ Modern Tooling:** Migrated from Create React App to **Vite 6** for blazing-fast builds and development.
  * **⚛️ Up-to-Date:** Upgraded to **React 19** to leverage the latest features and performance improvements.
  * **✅ Automated Quality:** Implemented **ESLint 9** and **Prettier** for automated code quality and formatting.
  * **🧪 Robust Testing:** Achieved **95%+ test coverage** using **Vitest** and **React Testing Library**.
  * **🤖 CI/CD Ready:** Integrated **Husky** git hooks to enforce quality standards pre-commit and pre-push.
  * **📦 Efficient Dependencies:** Switched to **pnpm** for faster and more efficient package management.
  * **📱 Responsive Design:** Built with a mobile-first approach.

-----

## 🛠️ Tech Stack

  * **Frontend**: React 19
  * **Build Tool**: Vite 6
  * **Testing**: Vitest, React Testing Library
  * **Code Quality**: ESLint 9, Prettier
  * **Git Hooks**: Husky
  * **Package Manager**: pnpm

-----

## 🚀 Getting Started

### Prerequisites

  * Node.js (18+)
  * pnpm (recommended) or npm/yarn
  * Git

### Quick Start

1.  **Clone the repository:**

    ```bash
    git clone <your-repo-url>
    cd organo
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    # or npm install
    ```

3.  **Start the development server:**

    ```bash
    pnpm dev
    # or npm run dev
    ```

The application will be available at `http://localhost:5173`.

-----

## 📜 Available Scripts

| Script                | Description                                |
| --------------------- | ------------------------------------------ |
| `pnpm dev`            | Starts the development server              |
| `pnpm build`          | Builds the app for production              |
| `pnpm test`           | Runs all tests                             |
| `pnpm test:watch`     | Runs tests in watch mode                   |
| `pnpm test:ui`        | Opens the Vitest UI for interactive testing|
| `pnpm test:coverage`  | Generates a test coverage report           |
| `pnpm lint`           | Runs ESLint to check for code quality      |
| `pnpm format`         | Formats code with Prettier                 |

-----

## 🧪 Testing

This project prioritizes code reliability and includes a comprehensive test suite.

  * **Framework**: **Vitest** for a fast and efficient testing environment.
  * **Library**: **React Testing Library** for robust, user-centric component tests.
  * **Coverage**: A minimum of 90% test coverage is enforced by a pre-push hook.

To run tests and view coverage, use the following commands:

```bash
# Run all tests
pnpm test

# Run tests with a detailed coverage report
pnpm test:coverage
```

-----

## 🤝 Contributing

We welcome contributions\! To get started:

1.  Fork the repository.
2.  Create a new feature branch: `git checkout -b feat/your-feature-name`.
3.  Commit your changes using a **conventional commit** format (e.g., `feat: add user profile page`).
4.  Push to the branch and open a Pull Request.

**Note:** All contributions are subject to automated quality checks via Husky hooks, including linting, formatting, and a minimum test coverage of 90%.

-----

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for more details.

-----

**Happy Coding\! 🎉**