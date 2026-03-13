# Railway.app Deployment Checklist

Use this checklist to ensure your repository is properly configured for deployment on Railway.app.

## Pre-Deployment Checklist

### Repository Configuration
- [x] `Procfile` - Defines how Railway runs the app
- [x] `railway.json` - Railway-specific build and deployment configuration
- [x] `.env.example` - Documents all required environment variables
- [x] `package.json` (root) - Manages build and start commands for monorepo
- [x] `.nvmrc` - Specifies Node.js version (18.17.0)
- [x] `backend/init-db.js` - Automatic database schema initialization
- [x] `RAILWAY_SETUP.md` - Detailed Railway deployment guide

### Application Configuration
- [x] Express backend configured to serve Vue frontend
- [x] CORS properly configured with environment variable
- [x] Frontend build output configured to `dist/`
- [x] API routes protected with `/api` prefix check
- [x] Database connection using `DATABASE_URL` environment variable
- [x] Vue Router configured with `createWebHistory()` for client-side routing

## Deployment Steps

### 1. Prepare Your Repository
```bash
# Ensure everything is committed to git
git add .
git commit -m "Configure for Railway.app deployment"
git push origin main
```

### 2. Create a Railway Project
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Connect your GitHub account and select this repository
5. Click "Deploy Now"

### 3. Add a PostgreSQL Database
1. In your Railway project dashboard, click "Add"
2. Select "Add Service"
3. Choose "PostgreSQL"
4. The `DATABASE_URL` environment variable will be automatically set

### 4. Configure Environment Variables
In Railway's project settings, add/verify these variables:

```
DATABASE_URL          # Automatically set by PostgreSQL addon
DB_URL                # (Optional) Alias, defaults to DATABASE_URL
PORT                  # Default: 4000 (usually auto-set by Railway)
NODE_ENV              # Set to: production
CORS_ORIGIN           # Set to: https://your-app.railway.app
VITE_API_BASE         # Set to: /api
```

> **Note:** Find your Railway domain in the deployment settings. It typically looks like `your-app-production.railway.app`

### 5. Trigger Initial Deployment
The deployment should auto-trigger when you push to your main branch. You can also manually trigger it in Railway's dashboard:
1. Navigate to your service
2. Click "Deploy"
3. Watch the build logs in real-time

### 6. Verify the Deployment
1. Visit your Railway domain (e.g., `https://your-app-production.railway.app`)
2. Check that:
   - The Vue frontend loads
   - Navigation works (client-side routing)
   - API calls work (check network tab in DevTools)
   - Database is properly initialized

### 7. Access Your Database
```bash
# Use Railway CLI to access your PostgreSQL database
railway shell

# Or connect with a database client using the DATABASE_URL from Railway
psql $DATABASE_URL
```

## Troubleshooting

### App won't start
- Check Railway build logs for errors
- Verify all dependencies are in package.json files
- Ensure `backend/init-db.js` can find `db/schema.sql`

### Database connection fails
- Verify DATABASE_URL is set in environment variables
- Check PostgreSQL addon is running in Railway dashboard
- Review application logs for detailed error messages

### Frontend not loading
- Verify `frontend/dist/index.html` exists in build logs
- Check CORS_ORIGIN matches your Railway domain
- Clear browser cache and do a hard refresh (Ctrl+Shift+R)

### API calls failing
- Check VITE_API_BASE environment variable is set to `/api`
- Verify the Express server is properly serving `/api/*` routes
- Check browser console for CORS errors

### Build timeout
- Railway allows up to 30 minutes for builds
- If you have large dependencies, consider removing unused packages
- Check that `npm install` completes in all directories (root, frontend, backend)

## Post-Deployment

### Monitoring
- Check Railway's "Monitoring" tab for:
  - HTTP response codes
  - CPU and memory usage
  - Error logs

### Scaling
- Railway automatically scales based on demand
- Adjust auto-restart policy in `railway.json` if needed

### Database Backups
- Railroad autosave backups daily to their PostgreSQL addon
- Set up automatic backups in the PostgreSQL addon settings

### Custom Domain
1. In Railway project settings, go to "Project Domains"
2. Add your custom domain
3. Configure DNS records with your domain provider

## Local Testing (Optional)

Before deploying to Railway, test locally:

```bash
# Install all dependencies
npm run install:all

# For development with hot-reload
npm run dev
# Frontend: http://localhost:3000
# Backend: http://localhost:4000

# For production-like testing
npm run build        # Build frontend
npm start           # Start server with DB init
# Visit: http://localhost:4000
```

## Additional Resources

- [Railway.app Documentation](https://docs.railway.app)
- [Railway CLI Reference](https://docs.railway.app/develop/cli)
- [Node.js on Railway](https://docs.railway.app/guides/nodejs)
- [PostgreSQL on Railway](https://docs.railway.app/databases/postgresql)
- [Environment Variables Guide](https://docs.railway.app/develop/variables)

---

**Need Help?**
- Railway Support: [support.railway.app](https://support.railway.app)
- Community Discord: [railway.app/discord](https://railway.app/discord)
