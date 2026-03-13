# Railway.app Configuration Summary

Your repository has been configured for deployment on Railway.app. Here's what was set up:

## Files Created/Modified

### Core Configuration Files
| File | Purpose |
|------|---------|
| `Procfile` | Tells Railway how to build and run the application |
| `railway.json` | Railway-specific build and deployment settings |
| `.env.example` | Documents all required environment variables |
| `.nvmrc` | Specifies Node.js 18.17.0 for consistency |
| `package.json` | Root package.json for monorepo management |

### Application Setup

#### Backend Configuration
- **`backend/init-db.js`** - Automatically initializes PostgreSQL schema on startup
- **`backend/package.json`** - Updated start script to run DB init then Express server
- **`backend/src/app.js`** - Modified to serve the built Vue frontend as static files

#### Frontend Configuration
- **`frontend/vite.config.js`** - Added build output configuration with dist folder

## How It Works

### Build Phase (Railway runs these automatically)
```
1. npm install (root)
2. npm install (frontend) 
3. npm install (backend)
4. npm run build (frontend) → creates frontend/dist/
5. npm run build (backend) → no-op for backend
```

### Deploy Phase (Railway runs `npm start`)
```
1. npm start (root) → runs: npm --prefix backend start
2. backend/init-db.js → Creates database tables from schema.sql
3. Express server starts → Serves frontend at / and API at /api
```

## Architecture

```
User Browser
     ↓
Express Server (Port 4000)
├─ Static Files: Vue Frontend (frontend/dist/*)
├─ API Routes: /api/menu → PostgreSQL
└─ Client-side Routing: Vue Router handles navigation

PostgreSQL Database
├─ categories table
└─ items table
```

## Required Environment Variables

Set these in Railway's environment configuration:

- **DATABASE_URL** - Set by PostgreSQL addon (required)
- **PORT** - Defaults to 4000
- **NODE_ENV** - Set to `production`
- **CORS_ORIGIN** - Your Railway domain (e.g., `https://my-app.railway.app`)
- **VITE_API_BASE** - Set to `/api`

## Quick Start for Deployment

1. Commit all changes to git
2. Push to your GitHub repository
3. Go to [railway.app](https://railway.app) and connect your repo
4. Add a PostgreSQL add-on
5. Set environment variables (especially CORS_ORIGIN with your domain)
6. Deploy!

See **RAILWAY_SETUP.md** for detailed instructions.
See **RAILWAY_DEPLOYMENT_CHECKLIST.md** for step-by-step deployment guide.

## Local Development

```bash
# Install all dependencies
npm run install:all

# Run with hot-reload
npm run dev
```

## Local Testing (Production-like)

```bash
# Build the frontend
npm run build

# Start the server (with DB init)
npm start

# Visit http://localhost:4000
```

## Key Features

✅ Automatic database initialization on deploy  
✅ Frontend served from Express (single deployment)  
✅ CORS properly configured with environment variables  
✅ Client-side routing support (Vue Router)  
✅ Production-ready build configuration  
✅ Node.js version pinned (18.17.0)  

## Troubleshooting Quick Links

- App won't start? → Check `RAILWAY_SETUP.md` → Troubleshooting section
- Database errors? → Verify DATABASE_URL is set in Railway
- Frontend not loading? → Check build logs in Railway dashboard
- API calls failing? → Verify CORS_ORIGIN matches your domain

---

**Ready to deploy?** Follow the checklist in **RAILWAY_DEPLOYMENT_CHECKLIST.md**
