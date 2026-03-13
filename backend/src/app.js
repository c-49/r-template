require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const menuRoutes = require('./routes/menu');

const app = express();
const port = process.env.PORT || 4000;

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the built frontend
const frontendDistPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendDistPath));

app.use('/api/menu', menuRoutes);

// Serve the Vue app for client-side routing
app.get('*', (req, res) => {
  // If it's an API route, don't serve the index
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ error: 'Not found' });
  }
  // Otherwise serve the Vue app for client-side routing
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

// Global error handler for unhandled errors
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
