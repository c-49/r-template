const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

// get categories with items
router.get('/', async (req, res) => {
  let client;
  try {
    if (!process.env.DB_URL) {
      return res.status(500).json({ error: 'DB_URL not configured' });
    }
    client = await pool.connect();
    const categoriesRes = await client.query('SELECT * FROM categories ORDER BY id');
    const categories = categoriesRes.rows;

    for (const cat of categories) {
      const itemsRes = await client.query('SELECT * FROM items WHERE category_id = $1 AND available = true', [cat.id]);
      cat.items = itemsRes.rows;
    }

    res.json(categories);
  } catch (err) {
    console.error('Menu fetch error:', err.message);
    res.status(500).json({ error: err.message || 'Internal server error' });
  } finally {
    if (client) client.release();
  }
});

// create category
router.post('/categories', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// create item
router.post('/items', async (req, res) => {
  const { category_id, name, description, price, image, available } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO items (category_id, name, description, price, image, available) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [category_id, name, description, price, image, available]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// update item
router.put('/items/:id', async (req, res) => {
  const id = req.params.id;
  const { name, description, price, image, available } = req.body;
  try {
    const result = await pool.query(
      'UPDATE items SET name=$1, description=$2, price=$3, image=$4, available=$5 WHERE id=$6 RETURNING *',
      [name, description, price, image, available, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// delete item
router.delete('/items/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query('DELETE FROM items WHERE id=$1', [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
