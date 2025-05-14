-- Q1
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NULL);
-- Answer: 0
-- The subquery returns NULL. `NOT IN (NULL)` causes all comparisons to return UNKNOWN,
-- so no rows match the condition. Result is 0.

-- Q2
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id = 5);
-- Answer: 2
-- subquery returns (5), so rows with id 6 and 7 are included. NULL is ignored in `NOT IN`.

-- Q3
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN (SELECT id FROM SecondTab);
-- Answer: 0
-- The subquery returns (5, NULL). `NOT IN` with NULL in the list results in UNKNOWN,
-- so no rows satisfy the condition. Result is 0.

-- Q4
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft 
-- WHERE ft.id NOT IN (SELECT id FROM SecondTab WHERE id IS NOT NULL);
-- Answer: 2
-- The subquery returns (5). So rows with id 6 and 7 match. NULL is not compared.
