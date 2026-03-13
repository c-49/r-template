# Railway.app Deployment Guide

This repository is configured for deployment on Railway.app with a monorepo structure containing both a Vue 3 frontend and Express backend.

## Deployment Setup

### Prerequisites
- Railway.app account (https://railway.app)
- GitHub repository connected to Railway

### Environment Variables

The following environment variables must be configured in Railway:

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | (required) |
| `DB_URL` | Alias for DATABASE_URL | (optional, for backward compatibility) |
| `PORT` | Port the server runs on | `4000` |
| `NODE_ENV` | Node environment | `production` |
| `CORS_ORIGIN` | CORS allowed origin | `http://localhost:3000` |
| `VITE_API_BASE` | Frontend API base URL | `/api` |

### Railway Configuration

1. **Create a new project** in Railway.app
2. **Add a PostgreSQL database** from the add-ons marketplace
3. **Connect your repository** and set up the service

#### Automatic Configuration
- Railway will automatically detect the Node.js environment
- The `railway.json` file configures the build and deploy settings
- The `Procfile` specifies how to run the application

##### Manual Configuration (if needed)
If Railway doesn't auto-detect, configure in the `railway.json`:

```json
{
  "build": {
    "builder": "nixpacks"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "on_failure",
    "restartPolicyMaxRetries": 5
  }
}
```

### Deployment Process

1. **Push to GitHub** - The connected repo will trigger Railway builds
2. **Build Phase**:
   - `npm install` (installs root dependencies)
   - `npm install` in `/frontend` and `/backend`
   - `npm run build` (builds frontend and prepares backend)
3. **Start Phase**:
   - Runs `npm start` which:
     - Initializes the database from `backend/db/schema.sql`
     - Starts the Express server on the configured PORT
     - Serves the built Vue frontend from `/`

### Database Initialization

The database schema is automatically applied on each deployment through the `backend/init-db.js` script. This:
- Creates the `categories` and `items` tables
- Is idempotent (safe to run multiple times)
- Runs automatically when the backend starts

To seed initial data after deployment, connect to the PostgreSQL addon and run custom INSERT statements.

### Important Notes

- **CORS_ORIGIN**: Update to your production domain when deploying
  - Example: `https://your-app.railway.app`
- **Frontend Build**: The Vue frontend is built during the build phase and served by Express
- **Database**: The PostgreSQL addon from Railway will automatically set the `DATABASE_URL` variable
- **Logs**: View deployment logs in Railway's dashboard for debugging

### Troubleshooting

**Build fails with "node_modules not found"**
- Railway will automatically run `npm install` in root, frontend, and backend directories

**Database connection error**
- Ensure DATABASE_URL is set in Railway's environment
- Check if the PostgreSQL addon is running
- Verify the schema in backend/db/schema.sql is valid

**Frontend not loading**
- Ensure the frontend build completes (check build logs)
- Verify VITE_API_BASE matches your actual API endpoint

**API calls failing from frontend**
- Check CORS_ORIGIN in environment variables
- Make sure it matches where the frontend is being served from

### Local Development

For local development with hot-reload:

```bash
npm run install:all    # Install all dependencies
npm run dev            # Runs frontend dev server + backend with nodemon
```

For production-like testing locally:

```bash
npm run build          # Build frontend and backend
npm start             # Start the Express server (runs db init + server)
```

Visit `http://localhost:4000` to test.

## Architecture

```
┌─────────────────────────────────────────┐
│   Railway.app (Production)              │
├─────────────────────────────────────────┤
│  Express Server (Node.js)               │
│  - Serves Vue Frontend /                │
│  - REST API /api/*                      │
│  - Database: PostgreSQL                 │
└─────────────────────────────────────────┘
```

### Build Pipeline

```
GitHub Push
    ↓
Railway Build
    ├─ npm install (root)
    ├─ npm install (frontend)
    ├─ npm install (backend)
    ├─ npm run build (frontend → dist/)
    └─ npm run build (backend)
    ↓
Railway Deploy
    ├─ npm start
    ├─ scripts/init-db.js
    └─ Express server listening on PORT
```

---

For more information, visit:
- [Railway.app Docs](https://docs.railway.app)
- [Node.js Documentation](https://nodejs.org/docs)
- [Express Documentation](https://expressjs.com)
