#!/usr/bin/env node

/**
 * Database initialization script for Railway deployment
 * Runs the schema.sql file to initialize the PostgreSQL database
 */

const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const dbUrl = process.env.DATABASE_URL || process.env.DB_URL;

if (!dbUrl) {
  console.error('Error: DATABASE_URL or DB_URL environment variable is not set');
  process.exit(1);
}

const pool = new Pool({
  connectionString: dbUrl,
});

async function initializeDatabase() {
  let client;
  try {
    console.log('Connecting to database...');
    client = await pool.connect();

    const schemaPath = path.join(__dirname, '../backend/db/schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    console.log('Running database schema...');
    await client.query(schema);

    console.log('✓ Database initialization completed successfully');
  } catch (err) {
    console.error('✗ Database initialization failed:', err.message);
    process.exit(1);
  } finally {
    if (client) client.release();
    await pool.end();
  }
}

initializeDatabase();
