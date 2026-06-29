-- Postgres does NOT support "CREATE DATABASE IF NOT EXISTS".
-- Create the database once manually, then let Spring Boot (ddl-auto=update) create the tables.

-- 1) Run this once from psql or a GUI client:
--    CREATE DATABASE duneverse;

-- 2) Tables below are created automatically on first backend run via Hibernate ddl-auto=update.
--    This file is kept for reference / manual setup if you prefer not to rely on Hibernate auto-DDL.

CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255) NOT NULL,
  message VARCHAR(2000) NOT NULL,
  service_interest VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS job_openings (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(255),
  department VARCHAR(255),
  location VARCHAR(255),
  employment_type VARCHAR(100),
  description VARCHAR(3000),
  vertical VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS job_applications (
  id BIGSERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50),
  job_id BIGINT,
  resume_link VARCHAR(500),
  cover_note VARCHAR(2000),
  applied_at TIMESTAMP DEFAULT NOW()
);
