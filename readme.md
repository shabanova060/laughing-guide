# Project Name

This project is a high-performance web application built with **React 19** and **TanStack Start**, leveraging a modern, type-safe ecosystem for full-stack development.

## Tech Stack

### Core & Framework
*   **Framework:** [TanStack Start](https://tanstack.com/start/latest)
*   **Library:** [React 19](https://react.dev/reference/react)
*   **Runtime/Package Manager:** [Bun](https://bun.sh/)

### Database & Data Layer
*   **ORM:** [Drizzle ORM](https://orm.drizzle.team/docs/overview)
*   **Driver:** Bun SQL (`postgres`)
*   **Database:** [Neon Postgres](https://neon.com/docs/introduction)

### Styling & UI
*   **UI Primitives:** [Base UI](https://base-ui.com/react/overview/quick-start) (Mandatory for interactive components)
*   **Styling Engine:** [Tailwind CSS v4](https://tailwindcss.com/docs/installation)
*   **Utilities:** `clsx` and `tailwind-merge` for dynamic class composition.
*   **Color Palette:** Strictly restricted to [Tailwind Neutral](https://tailwindcss.com/docs/colors).
*   **Typography:** [Fontsource](https://fontsource.org/)

### Tooling & Quality
*   **Linting/Formatting:** [Biome](https://biomejs.dev/guides/getting-started/)

## Project Standards

### Component Architecture
*   **Base UI First:** All interactive components (modals, dropdowns, buttons, etc.) must utilize or extend [Base UI](https://base-ui.com/react/overview/quick-start) primitives.
*   **Syntax:** All standard components and utility functions must be defined as **arrow functions**.
*   **Route Components:** Only pages and route-level components should be defined as `function` declarations.
*   **Styling:** Use Tailwind v4. Always compose classes using `cn(clsx(), tailwind-merge)`. Strict adherence to the `neutral` color scale is required for all UI elements.

### Database Interaction
*   All database operations must be executed via **Drizzle ORM**.
*   Whether using the ORM-style, Query-Builder, or raw tagged templates, all SQL execution must pass through the Drizzle API.

## Getting Started

### Prerequisites
*   [Bun](https://bun.sh/) installed on your machine.
*   A [Neon Postgres](https://neon.com/) database connection string.

### Installation

1.  **Clone the repository:**
```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**
```bash
    bun install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory:
```env
    DATABASE_URL=your_neon_postgres_connection_string
    ```

4.  **Run Development Server:**
```bash
    bun run dev
    ```

## Development Scripts

*   `bun run dev`: Starts the development server.
*   `bun run build`: Builds the application for production.
*   `bun run start`: Starts the production server.
*   `bun run lint`: Runs Biome to check for formatting and linting errors.
*   `bun run format`: Automatically fixes formatting issues via Biome.
*   `bun run db:push`: Syncs the schema to the Neon database using Drizzle Kit.

## License

[Add License Information]
