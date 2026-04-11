# Zonetyper

A competitive typing application with real-time WPM tracking, leaderboards, and detailed session analytics.

## Tech Stack

- **Frontend:** React 19, TypeScript, Framer Motion, React Router
- **Backend:** ASP.NET Core (.NET 10), Entity Framework Core
- **Database:** PostgreSQL
- **Infrastructure:** Azure (App Service, Static Web Apps, Container Registry), Docker, GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- .NET 10 SDK
- Docker / Docker Compose
- PostgreSQL (or use the provided Docker Compose setup)

### Local Development

```bash
# Clone the repo
git clone https://github.com/annunziatoc/zonetyper.git
cd zonetyper

# Start the database
docker compose up -d db

# Run the API
cd api
dotnet run

# Run the frontend
cd ../client
npm install
npm run dev
```

The app will be available at `http://localhost:5173` and the API at `http://localhost:5000`.

## Features

- Typing tests with real-time WPM and accuracy tracking
- Session history and WPM trend charts
- Global leaderboard
- User accounts and personal stats (*in developoment*)

## Deployment

CI/CD via GitHub Actions. Pushes to `main` build and deploy to Azure automatically.