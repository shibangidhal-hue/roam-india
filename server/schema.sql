CREATE DATABASE IF NOT EXISTS roam_india CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE roam_india;

-- Use a dedicated, least-privilege database account for the application.
CREATE TABLE IF NOT EXISTS users (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(254) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS bookings (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  reference_code VARCHAR(32) NOT NULL UNIQUE,
  user_id BIGINT UNSIGNED NOT NULL,
  booking_type ENUM('hotel', 'package') NOT NULL,
  item_id VARCHAR(100) NOT NULL,
  item_name VARCHAR(200) NOT NULL,
  destination VARCHAR(120) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NULL,
  travellers SMALLINT UNSIGNED NOT NULL,
  rooms SMALLINT UNSIGNED NULL,
  estimated_total DECIMAL(12,2) NOT NULL,
  status ENUM('REQUESTED', 'CANCELLED') NOT NULL DEFAULT 'REQUESTED',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_bookings_user FOREIGN KEY (user_id) REFERENCES users(id),
  INDEX idx_bookings_user_created (user_id, created_at)
);



CREATE TABLE IF NOT EXISTS hotels (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    city VARCHAR(120) NOT NULL,
    address VARCHAR(500) NOT NULL,
    description TEXT,
    price_per_night DECIMAL(10,2) NOT NULL,
    image_url VARCHAR(1000),
    category VARCHAR(100),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
