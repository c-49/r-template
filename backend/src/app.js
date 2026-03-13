require('dotenv').config();
const express = require('express');
const cors = require('cors');
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

app.use('/api/menu', menuRoutes);

app.get('/', (req, res) => {
  res.send('Restaurant API');
});

// Global error handler for unhandled errors
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
