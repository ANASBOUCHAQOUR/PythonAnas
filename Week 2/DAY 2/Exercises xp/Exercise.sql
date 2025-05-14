-- exercise 1
-- All items, ordered by price (lowest to highest)
SELECT item_label, item_price
FROM items
ORDER BY item_price ASC;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest)
SELECT item_label, item_price
FROM items
WHERE item_price >= 80
ORDER BY item_price DESC;

-- The first 3 customers in alphabetical order of the first name (A-Z), excluding the primary key
SELECT first_name, last_name
FROM customers
ORDER BY first_name
LIMIT 3;

-- All last names (no other columns), in reverse alphabetical order (Z-A)
SELECT last_name
FROM customers
ORDER BY last_name DESC;

-- exercise 2
-- Select all columns from the “customer” table
SELECT * FROM customer;

-- Display full name using alias "full_name"
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM customer;

-- Get all unique account creation dates
SELECT DISTINCT create_date
FROM customer;

-- Get all customer details ordered by first name in descending order
SELECT * FROM customer
ORDER BY first_name DESC;

-- Get film ID, title, description, year of release and rental rate, ordered by rental rate
SELECT film_id AS "film ID", title, description, release_year AS "year of release", rental_rate AS "rental rate"
FROM film
ORDER BY rental_rate ASC;

-- Get address and phone of all customers living in Texas
SELECT address, phone
FROM customer
INNER JOIN address ON customer.address_id = address.address_id
WHERE address.district = 'Texas';

-- Get all movie details for film IDs 15 and 150
SELECT * FROM film
WHERE film_id IN (15, 150);

-- Check if your favorite movie exists
SELECT film_id AS "film ID", title, description, length, rental_rate AS "rental rate"
FROM film
WHERE title ILIKE 'Forrest Gump';

-- Get movies starting with the first two letters of your favorite movie
SELECT film_id AS "film ID", title, description, length, rental_rate AS "rental rate"
FROM film
WHERE title ILIKE 'Fo%';

-- Find the 10 cheapest movies
SELECT film_id AS "film ID", title, description, length, rental_rate AS "rental rate"
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- Find the next 10 cheapest movies
SELECT film_id AS "film ID", title, description, length, rental_rate AS "rental rate"
FROM film
ORDER BY rental_rate ASC
LIMIT 10 OFFSET 10;

-- Join customer and payment tables and show customer name, amount, and date
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;

-- Find all movies not in inventory
SELECT *
FROM film
WHERE film_id NOT IN (
  SELECT film_id FROM inventory
);

-- Find which city is in which country
SELECT city.city, country.country
FROM city
INNER JOIN country ON city.country_id = country.country_id;

-- Get customer's ID, names, amount, and payment date ordered by staff member
SELECT customer.customer_id, customer.first_name, customer.last_name, amount, payment_date
FROM customer 
INNER JOIN payment ON customer.customer_id = payment.customer_id
INNER JOIN staff ON staff.staff_id = payment.staff_id
ORDER BY staff.staff_id;

