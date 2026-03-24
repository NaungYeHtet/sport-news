# Sport News

A full-stack sports news web application featuring a landing page with sports categories and a demo request form with full client and server-side validation.

## Architecture Overview

The project is structured as a **monorepo** with a clear separation between frontend and backend:

- **Frontend:** Next.js 16 (App Router) with Tailwind CSS 4 for styling
- **Backend:** NestJS 11 with Prisma ORM for database access
- **Database:** PostgreSQL 16, managed via Docker Compose

### Form Validation

The demo request form implements **dual-layer validation**:
- **Client-side:** Zod schemas with React Hook Form for immediate feedback
- **Server-side:** class-validator DTOs for secure enforcement, including input trimming and email normalization

### Security

- **Helmet** for HTTP security headers
- **Rate limiting** — 5 requests/min globally, 3 requests/min on the form endpoint
- **CORS** restricted to allowed origins
- **XSS prevention** through HTML tag stripping on all user inputs

### Database

Migrations are managed by Prisma, and a global exception filter ensures consistent structured error responses throughout the API.

### AWS Deployment (Bonus)

The AWS deployment with CI/CD pipeline was not included in this submission due to payment method limitations preventing AWS account setup. Happy to walk through the planned deployment approach if helpful.

## Tech Stack

**Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, React Hook Form, Zod

**Backend:** NestJS 11, Prisma 6, PostgreSQL 16, class-validator

**DevOps:** Docker Compose, pnpm

## Prerequisites

- Node.js (v20+)
- pnpm
- Docker & Docker Compose

## Getting Started

### 1. Start the database

```bash
docker compose up -d
```

This starts PostgreSQL 16 on port **5433**.

### 2. Set up the backend

```bash
cd backend
cp .env.example .env
pnpm install
npx prisma migrate dev
pnpm start:dev
```

The API will be available at `http://localhost:3001`.

### 3. Set up the frontend

```bash
cd frontend
pnpm install
```

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Then start the dev server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Project Structure

```
sport-news/
├── frontend/                # Next.js frontend
│   ├── src/
│   │   ├── app/             # Pages and layouts
│   │   ├── components/      # UI components
│   │   └── lib/             # Validation schemas, API client, data
│   └── public/images/       # Static assets
├── backend/                 # NestJS API
│   ├── src/
│   │   ├── demo-request/    # Demo request module (controller, service, DTOs)
│   │   ├── prisma/          # Database service
│   │   └── common/filters/  # Global exception filter
│   ├── prisma/
│   │   └── schema.prisma    # Database schema
│   └── test/                # E2E tests
└── docker-compose.yml       # PostgreSQL service
```

## Available Scripts

### Frontend

| Command       | Description                  |
| ------------- | ---------------------------- |
| `pnpm dev`    | Start development server     |
| `pnpm build`  | Build for production         |
| `pnpm start`  | Run production build         |
| `pnpm lint`   | Run ESLint                   |

### Backend

| Command               | Description                  |
| --------------------- | ---------------------------- |
| `pnpm start:dev`      | Start in watch mode          |
| `pnpm build`          | Compile TypeScript           |
| `pnpm start:prod`     | Run production build         |
| `pnpm test`           | Run unit tests               |
| `pnpm test:e2e`       | Run end-to-end tests         |
| `pnpm test:cov`       | Generate test coverage       |
| `pnpm lint`           | Run ESLint with auto-fix     |
| `pnpm format`         | Format code with Prettier    |

## API Endpoints

| Method | Path             | Description              |
| ------ | ---------------- | ------------------------ |
| GET    | `/`              | Health check             |
| POST   | `/demo-request`  | Submit a demo request    |

### POST `/demo-request`

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "country": "United States",
  "message": "Optional message"
}
```

## Environment Variables

### Backend (`.env`)

| Variable       | Description                  |
| -------------- | ---------------------------- |
| `DATABASE_URL` | PostgreSQL connection string |

See `backend/.env.example` for reference.

### Frontend (`.env.local`)

| Variable              | Description     |
| --------------------- | --------------- |
| `NEXT_PUBLIC_API_URL` | Backend API URL |
