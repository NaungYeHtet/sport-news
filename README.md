# Sport News

A full-stack sports news web application featuring a landing page with sports categories and a demo request form with full client and server-side validation.

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

## Security

- **Helmet** for HTTP security headers
- **Rate limiting** — 5 req/min globally, 3 req/min on `/demo-request`
- **CORS** restricted to `localhost:3000`
- **Input validation** on both client (Zod) and server (class-validator)
- **HTML sanitization** on user inputs

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
