-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS BlackList;
USE BlackList;

-- Crear tabla Users
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'Hoster') NOT NULL
);

-- Crear tabla Champions
CREATE TABLE Champions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Crear tabla Bans (relación many-to-many entre Users y Champions)
CREATE TABLE Bans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    champ_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (champ_id) REFERENCES Champions(id) ON DELETE CASCADE
);

-- Crear tabla Players
CREATE TABLE Players (
    id INT AUTO_INCREMENT PRIMARY KEY,
    summoner_name VARCHAR(100) NOT NULL,
    summoner_tag VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    ban_duration ENUM('1h', '12h', '1día', '7días', '30días', 'permanentemente') NOT NULL,
    user_name VARCHAR(50),
    FOREIGN KEY (user_name) REFERENCES Users(username) ON DELETE CASCADE
);

-- Crear tabla History
CREATE TABLE History (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT NOT NULL -- NO es FK para mantener historial aunque se borre el jugador
);

-- Insertar usuario de prueba (Admin)
INSERT INTO Users (username, password, role)
VALUES ('Admin', '1234', 'Admin');
