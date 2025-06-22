// Load environment variables from .env file
require('dotenv').config();

// Database configuration for different environments
module.exports = {
    development: {
        // Using PostgreSQL as the database client
        client: "pg",
        // Database connection settings from environment variables
        connection: {
            host: process.env.DB_HOST,      // Database host (e.g., localhost)
            port: process.env.DB_PORT,      // Database port (default: 5432)
            user: process.env.DB_USER,      // Database username
            password: process.env.DB_PASS,  // Database password
            database: process.env.DB_NAME,  // Database name
        },
    },
};