CREATE DATABASE IF NOT EXISTS bobscorn;

CREATE TABLE IF NOT EXISTS users (
  email VARCHAR(255)PRIMARY KEY,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_purchase_at BIGINT
);

CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_email) REFERENCES users(email)
);

DROP TABLE orders;
DROP TABLE users;

\c bobscorn; -- Connect to the bobscorn database

\dt; -- List all tables in the current database

\q: -- Exit psql connection
\c: -- Connect to a new database
\dt: -- List all tables
\du: -- List all roles
\list: -- List databases