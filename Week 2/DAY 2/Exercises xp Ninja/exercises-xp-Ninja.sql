-- Retrieve the last 2 customers in alphabetical order (A-Z), excluding 'id' from the results.
SELECT first_name, last_name
FROM customers
ORDER BY first_name
LIMIT 2;

-- Delete all purchases made by the customer named Scott.
DELETE FROM purchases
WHERE customer_id = (
    SELECT customer_id
    FROM customers
    WHERE first_name = 'Scott'
);

-- Check if Scott still exists in the customers table after his purchases have been deleted.
SELECT * 
FROM customers 
WHERE first_name = 'Scott';

-- Retrieve all purchases and join with the customers table, so that Scott’s order appears 
-- with empty fields for his first and last name after he has been deleted (LEFT JOIN).
SELECT * 
FROM customers
LEFT JOIN purchases
ON customers.customer_id = purchases.customer_id;

-- Retrieve all purchases and join with the customers table, ensuring Scott’s order does NOT appear 
-- by using a RIGHT JOIN, which excludes customers without valid data in the customers table.
SELECT * 
FROM customers
RIGHT JOIN purchases
ON customers.customer_id = purchases.customer_id;
