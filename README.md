# Vue 3 Restaurant Template

This repository provides a scaffold for a restaurant website and a minimal backend API. It's intended as a reusable base that can be quickly customized per client. The frontend is a Vue 3/Vite app and the backend is a Node.js/Express service connecting to PostgreSQL.

## Features

- Vue 3 with Composition API
- Vite build tooling
- Vue Router for navigation
- Pinia state management
- Vue i18n with English and Spanish examples
- Tailwind CSS with CSS variables for theming
- Axios for API calls
- Express REST API with CRUD endpoints for menu items
- PostgreSQL schema for categories and items
- Responsive layout with placeholder sections
- All content driven by config or database; minimal hardcoding

## Structure

```
/frontend
  /public
  /src
    /components  # reusable section components
    /views       # page components
    /router
    /store
    /i18n
    /services    # axios instance
    config.js    # site-level config
  package.json
  vite.config.js
  tailwind.config.js
  ...
/backend
  /src
    app.js      # express application
    /routes
      menu.js   # menu CRUD endpoints
  /db
    schema.sql  # postgres schema
  package.json

README.md
```

## Getting Started

### Frontend

1. Change into `frontend` and install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Copy `.env.example` to `.env` and adjust `VITE_API_BASE` if needed.
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

### Backend

1. Change into `backend` and install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create a PostgreSQL database (e.g. on Render.com) and configure the `const DB_URL` in a `.env` file:
   ```env
   const DB_URL=postgres://user:pass@host:port/dbname
   ```
3. Initialize the schema:
   ```bash
   psql $const DB_URL -f db/schema.sql
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
5. API endpoints are available under `/api/menu`.

## Customization

- **Content**: Update `frontend/src/config.js` or push data into the Postgres tables.
- **Theme**: Modify CSS variables in `src/index.css` or extend Tailwind configuration.
- **Translations**: Add new languages in `frontend/src/i18n/index.js` and externalize strings.
- **Pages/Sections**: Components in `src/components` can be added/removed from `HomeView.vue`. Each section is self‑contained.
- **Menu Management**: Use the Express endpoints to add/update/delete menu categories and items; integrate with a simple admin UI later.

## Notes

- All hardcoded text is wrapped with `$t()` for translation.
- The backend is intentionally minimal; expand as needed for authentication, reservations, etc.
- The schema includes an `available` flag to control visibility without deletion.

---

This template is designed to be a starting point. Replace placeholders, add branding, and extend functionality according to your clients' needs. Happy building!