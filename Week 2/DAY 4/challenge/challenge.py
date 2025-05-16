import requests  # For sending HTTP requests to the REST API
import random    # For selecting random countries from the list
import psycopg2  # PostgreSQL database adapter for Python
import pprint    # Pretty print (optional here, useful for debugging JSON)

# PostgreSQL connection parameters
HOSTNAME = "localhost"       # Server address (localhost if running locally)
USERNAME = "postgres"        # Your PostgreSQL username
PASSWORD = "password"        # Your PostgreSQL password (⚠️ change this in real use)
DATABASE = "example"         # Name of the target PostgreSQL database

# Function to fetch and return N random countries from the API
def get_random_countries(n=10):
    # REST Countries API endpoint to get data about all countries
    url = "https://restcountries.com/v3.1/all"
    
    # Make an HTTP GET request to the API
    response = requests.get(url)
    
    # Raise an exception if the request was unsuccessful
    response.raise_for_status()
    
    # Convert the JSON response to a Python list of dictionaries
    countries = response.json()
    
    # Randomly select 'n' countries from the full list
    selected = random.sample(countries, n)
    
    result = []  # This will store the selected country data in a simpler format

    # Loop through the selected countries and extract only needed fields
    for c in selected:
        name = c["name"]["common"]  # Get country name
        # Get capital city if available, else None
        capital = c.get("capital", [None])[0] if c.get("capital") else None
        # Get flag image link (prefer PNG, fallback to SVG)
        flag = c.get("flags", {}).get("png") or c.get("flags", {}).get("svg")
        # Get subregion (e.g., "Northern Europe")
        subregion = c.get("subregion", None)
        # Get population as integer
        population = c.get("population", None)

        # Append a tuple of the extracted fields to the result list
        result.append((name, capital, flag, subregion, population))

    # Return the list of cleaned up country data
    return result

# Function to insert country data into PostgreSQL database
def write_countries_to_db(countries):
    # Connect to PostgreSQL database using psycopg2
    connection = psycopg2.connect(
        host=HOSTNAME,
        user=USERNAME,
        password=PASSWORD,
        dbname=DATABASE
    )
    
    # Create a cursor object to execute SQL queries
    cursor = connection.cursor()
    
    # SQL command to create the table if it doesn't already exist
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS random_countries (
            id SERIAL PRIMARY KEY,           -- Auto-incrementing ID
            name VARCHAR(100),               -- Country name
            capital VARCHAR(100),            -- Capital city
            flag TEXT,                       -- URL of flag image
            subregion VARCHAR(100),          -- Geographical subregion
            population BIGINT                -- Population number
        )
    """
    )

    # Insert each country's data into the database table
    for name, capital, flag, subregion, population in countries:
        cursor.execute(
            """
            INSERT INTO random_countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
            """,
            (name, capital, flag, subregion, population)
        )

    # Commit changes to the database (make them permanent)
    connection.commit()

    # Close the cursor and connection to free resources
    cursor.close()
    connection.close()

# Main block: run only if this script is executed directly
if __name__ == "__main__":
    # Get 10 random countries from the API
    countries = get_random_countries(10)
    
    # Write those countries to the PostgreSQL database
    write_countries_to_db(countries)

    # Print confirmation message
    print("10 random countries have been written to the database.")
