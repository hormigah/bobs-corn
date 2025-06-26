import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: parseInt(DB_PORT || '5432', 10),
});


export const initDB = async () => {
  if (!DB_USER || !DB_HOST || !DB_NAME || !DB_PASSWORD || !DB_PORT) {
    throw new Error("Missing required database environment variables");
  }
  query(
    `CREATE TABLE ${DB_NAME}.users (
      email VARCHAR(255)PRIMARY KEY,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE ${DB_NAME}.orders (
      id SERIAL PRIMARY KEY,
      user_email VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_email) REFERENCES bobscorn.users(email)
    );`
  ).catch((error) => {
    console.error("Error inserting corn purchase into database:", error);
  });
};

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};

export const getClient = async () => {
  const client = await pool.connect();
  return client;
};

export const releaseClient = (client: any) => {
  if (client) {
    client.release();
  }
};

export const endPool = () => {
  return pool.end();
};

export default {
  initDB,
  query,
  getClient,
  releaseClient,
  endPool,
};