--Drop and recreate Users table if exits
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  
 );

 --Drop and recreate Lenders table if exists
DROP TABLE IF EXISTS lenders CASCADE;

CREATE TABLE lenders(
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL UNIQUE,
  institution VARCHAR(255) NOT NULL,
  employee_id VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(255) NOT NULL check (role IN ('supervisor','admin'))
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)


 -- Drop and recreate bank_doc table if exists
 DROP TABLE IF EXISTS bank_doc CASCADE;

 CREATE TABLE bank_doc (
  id  SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  mimetype TEXT NOT NULL,
  size INTEGER NOT NULL,
  file_data BYTEA NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

 )
 -- Drop and recreate id_doc table if exists
 DROP TABLE IF EXISTS id_doc CASCADE;

 CREATE TABLE id_doc (
  id  SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  mimetype TEXT NOT NULL,
  size INTEGER NOT NULL,
  file_data BYTEA NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

 )
 -- Drop and recreate income_doc table if exists
 DROP TABLE IF EXISTS income_doc CASCADE;

 CREATE TABLE income_doc (
  id  SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  mimetype TEXT NOT NULL,
  size INTEGER NOT NULL,
  file_data BYTEA NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

 )