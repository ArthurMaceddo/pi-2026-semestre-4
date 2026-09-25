import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});

async function VerifyConnection() {
  try {
    const client = await pool.connect();
    console.log('DB: Connected to the database');
    client.release();
  } catch (err) {
    console.error('DB: Error connecting to the database', err);
  }
}

VerifyConnection();
export default pool;