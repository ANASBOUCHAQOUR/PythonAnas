-- exercise 1
-- Get a list of all rentals which are still out (not returned)
SELECT * 
FROM rental 
WHERE return_date IS NULL;

--  Get a list of all customers who have not returned their rentals
-- Group by customer ID to avoid confusion with same names and show number of rentals still out
SELECT 
    customer.customer_id, 
    customer.first_name, 
    customer.last_name, 
    COUNT(*) AS outstanding_rentals
FROM customer
JOIN rental ON customer.customer_id = rental.customer_id
WHERE rental.return_date IS NULL
GROUP BY customer.customer_id, customer.first_name, customer.last_name;

--  Get a list of all Action films with actor Joe Swank
-- Join film, actor, and category tables to find matching action movies with Joe Swank
SELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'Action'
  AND actor.first_name = 'Joe'
  AND actor.last_name = 'Swank';

-- exercise 2
-- Stores and their city/country
DROP TABLE IF EXISTS halloween_store_locations;
CREATE TABLE halloween_store_locations AS
SELECT 
    s.store_id,
    ci.city,
    co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

-- Total viewing time per store (excluding unreturned rentals)
DROP TABLE IF EXISTS halloween_store_viewing_time;
CREATE TABLE halloween_store_viewing_time AS
SELECT 
    s.store_id,
    SUM(f.length) AS total_minutes,
    ROUND(SUM(f.length) / 60.0, 2) AS total_hours,
    ROUND(SUM(f.length) / 60.0 / 24.0, 2) AS total_days
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

-- Customers in same cities as stores
DROP TABLE IF EXISTS halloween_customers_in_store_cities;
CREATE TABLE halloween_customers_in_store_cities AS
SELECT DISTINCT cu.customer_id, cu.first_name, cu.last_name, ci.city
FROM customer cu
JOIN address a ON cu.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
WHERE ci.city_id IN (
    SELECT city_id
    FROM address
    WHERE address_id IN (
        SELECT address_id FROM store
    )
);

-- Customers in same countries as stores
DROP TABLE IF EXISTS halloween_customers_in_store_countries;
CREATE TABLE halloween_customers_in_store_countries AS
SELECT DISTINCT cu.customer_id, cu.first_name, cu.last_name, co.country
FROM customer cu
JOIN address a ON cu.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
WHERE co.country_id IN (
    SELECT DISTINCT co2.country_id
    FROM store s
    JOIN address a2 ON s.address_id = a2.address_id
    JOIN city ci2 ON a2.city_id = ci2.city_id
    JOIN country co2 ON ci2.country_id = co2.country_id
);

-- Safe movies (no horror, no scary keywords)
DROP TABLE IF EXISTS halloween_safe_movies;
CREATE TABLE halloween_safe_movies AS
SELECT 
    f.film_id,
    f.title,
    f.description,
    f.length
FROM film f
WHERE f.film_id NOT IN (
    SELECT film_id
    FROM film_category fc
    JOIN category c ON fc.category_id = c.category_id
    WHERE lower(c.name) = 'horror'
)
AND lower(title) NOT LIKE '%beast%'
AND lower(title) NOT LIKE '%monster%'
AND lower(title) NOT LIKE '%ghost%'
AND lower(title) NOT LIKE '%dead%'
AND lower(title) NOT LIKE '%zombie%'
AND lower(title) NOT LIKE '%undead%'
AND lower(description) NOT LIKE '%beast%'
AND lower(description) NOT LIKE '%monster%'
AND lower(description) NOT LIKE '%ghost%'
AND lower(description) NOT LIKE '%dead%'
AND lower(description) NOT LIKE '%zombie%'
AND lower(description) NOT LIKE '%undead%';

-- Safe movie viewing time summary
SELECT 
    COUNT(*) AS total_safe_movies,
    SUM(length) AS total_minutes,
    ROUND(SUM(length)/60.0, 2) AS total_hours,
    ROUND(SUM(length)/60.0/24.0, 2) AS total_days
FROM halloween_safe_movies;
