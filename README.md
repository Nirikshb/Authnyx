NextJs JWT Auth Boilerplate

This is a Next.js boilerplate featuring JWT-based authentication with HTTP-only cookies. It is designed to be a simple, ready-to-use starting point for building secure Next.js apps.

Features

- Next.js + React
- JWT authentication
- HTTP-only cookie-based session management
- Clean folder structure: app, components, services, lib
- Ready-to-use authentication API routes

Getting Started

1. Clone the repo

git clone https://github.com/your-username/Authnyx.git
cd Authnyx

2. Install dependencies

npm install
# or
yarn
# or
pnpm install

3. Setup environment variables

Create a .env.local file in the project root:

NEXT_PUBLIC_API_URL=http://localhost:3000/api
JWT_SECRET=your_super_secret_key
COOKIE_NAME=auth_token

4. Run the development server

npm run dev
# or
yarn dev
# or
pnpm dev

Open http://localhost:3000 in your browser

Folder Structure

app           - Next.js pages and API routes
components    - Reusable React components
services      - API helpers and auth services
lib           - Config and utility functions
public        - Static assets

Usage

- Sign up and login via API routes using JWT and cookies
- Protect pages by checking cookies on the server or client
- Extend easily for roles, permissions, or other auth strategies

Contributing

- You can fork and use it as a starting point
- Pull requests for improvements are welcome

License

MIT License
