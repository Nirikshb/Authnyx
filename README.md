# Next.js JWT Authentication Boilerplate

This is a [Next.js](https://nextjs.org/) boilerplate for building applications with JWT-based authentication. It provides a solid foundation for creating secure web applications with a pre-configured authentication flow using HTTP-only cookies.

## Features

*   **Next.js 14:** Utilizes the latest features of the Next.js App Router.
*   **JWT Authentication:** Secure, token-based authentication for your application.
*   **HTTP-Only Cookies:** Safely store JWTs to prevent XSS attacks.
*   **TypeScript:** Strongly typed codebase for better developer experience and fewer runtime errors.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **ESLint and Prettier:** Enforce consistent code style and catch errors early.
*   **Protected Routes:** Example of how to protect routes that require authentication.
*   **Ready-to-use API Routes:** Pre-built API endpoints for login, logout, and user profile.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or later)
*   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Authnyx.git
    cd Authnyx
    ```

2.  **Install dependencies:**

    Choose your preferred package manager:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

    or

    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the following variables:

    ```env
    JWT_SECRET="your-super-secret-jwt-secret"
    ```

    > **Note:** Change `your-super-secret-jwt-secret` to a long, random string.

### Running the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

or

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

*   `npm run dev`: Starts the development server.
*   `npm run build`: Creates a production build.
*   `npm run start`: Starts a production server.
*   `npm run lint`: Lints the codebase using ESLint.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
