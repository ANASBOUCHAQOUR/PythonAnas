-- 1. Get a list of all the languages from the language table.
SELECT * FROM language;

-- 2. Get all films with their language name.
SELECT title, description, language.name 
FROM film 
JOIN language ON film.language_id = language.language_id;

-- 3. Get all languages, even if there are no films in that language.
SELECT title, description, language.name
FROM film 
RIGHT JOIN language ON film.language_id = language.language_id;

-- 4. Create a new table called new_film and insert sample data.
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50)
);

INSERT INTO new_film (name) VALUES
('The Silent Forest'),
('Echoes of Time'),
('Digital Dreams'),
('Shadows of Tomorrow'),
('The Forgotten Code'),
('Midnight Run');

-- 5. Create a customer_review table with foreign key constraints.
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(50) NOT NULL,
    score INT NOT NULL CHECK(score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP NOT NULL
);

-- 6. Add 2 sample reviews with valid references to film and language.
INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES 
(
    (SELECT id FROM new_film WHERE name = 'The Silent Forest'), 
    (SELECT language_id FROM language WHERE name = 'English'),
    'Great Movie',
    9,
    'Loved the pacing and characters.',
    NOW()
),
(
    (SELECT id FROM new_film WHERE name = 'Midnight Run'), 
    (SELECT language_id FROM language WHERE name = 'English'),
    'Average Movie',
    5,
    'This movie is so basic, not interesting.',
    NOW()
);

-- 7. Delete a film and verify cascading effect on reviews.
DELETE FROM new_film WHERE name = 'The Silent Forest';

-- Check remaining films
SELECT * FROM new_film;

-- Check if the review is automatically deleted
SELECT * FROM customer_review;


-- 1. Update the language of specific films using valid language names.
UPDATE film 
SET language_id = (SELECT language_id FROM language WHERE name = 'Italian')
WHERE title = 'Chamber Italian';

UPDATE film 
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title = 'Grosse Wonderful';

-- 2. Foreign keys in customer table
/*
customer table foreign keys:
- store_id → store table
- address_id → address table

Implication:
To insert a new customer, the store_id and address_id values must exist in their respective tables.
*/

-- 3. Drop the customer_review table if it exists.
DROP TABLE IF EXISTS customer_review;

-- 4. Count how many rentals are still outstanding (not returned).
SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- 5. Find the 30 most expensive outstanding rentals.
SELECT film.title, film.rental_rate, rental.rental_date
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON film.film_id = inventory.film_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

-- 6. Find a film about a sumo wrestler with actor Penelope Monroe.
SELECT film.title, actor.first_name, actor.last_name
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE LOWER(film.description) LIKE '%sumo wrestler%'
  AND actor.first_name = 'Penelope'
  AND actor.last_name = 'Monroe';

-- Find a short (under 1 hour) documentary film rated 'R'.
SELECT film.title, film.length, film.rating
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.length < 60
  AND film.rating = 'R'
  AND category.name = 'Documentary';

-- Find a film Matthew Mahan rented and returned between specific dates, paid over $4.00.
SELECT film.title, rental.rental_date, rental.return_date, film.rental_rate
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'
  AND film.rental_rate > 4.00;

-- Find the most expensive film watched by Matthew Mahan that includes 'boat' in title or description.
SELECT film.title, film.description, film.replacement_cost
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew'
  AND customer.last_name = 'Mahan'
  AND (LOWER(film.title) LIKE '%boat%' OR LOWER(film.description) LIKE '%boat%')
ORDER BY film.replacement_cost DESC
LIMIT 1;
