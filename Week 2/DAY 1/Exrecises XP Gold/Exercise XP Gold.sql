CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    birth_date DATE
);
INSERT INTO students (first_name, last_name, birth_date) VALUES
('Anas', 'Bouchaqour', '2000-01-01'),
('Marouane', 'Cohen', '2010-12-03'),
('Abdelali', 'Benichou', '1987-07-27'),
('Amelia', 'Dux', '1996-04-07'),
('David', 'Grez', '2003-06-14'),
('Omer', 'Simpson', '1980-10-03');
INSERT INTO students (first_name, last_name, birth_date) 
VALUES ('Anas', 'Bouchaqour', '1992-05-13');
SELECT * FROM students;
SELECT first_name, last_name FROM students;
SELECT first_name, last_name FROM students WHERE id = 2;
SELECT first_name, last_name FROM students 
WHERE last_name = 'Benichou' AND first_name = 'Abdelali';
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a%';
SELECT first_name, last_name FROM students
WHERE first_name ILIKE 'a%';
SELECT first_name, last_name FROM students
WHERE first_name ILIKE '%a';
SELECT first_name, last_name FROM students
WHERE SUBSTRING(first_name FROM LENGTH(first_name) - 1 FOR 1) = 'a';
SELECT first_name, last_name FROM students
WHERE id IN (1, 3);
SELECT * FROM students
WHERE birth_date >= '2000-01-01';

-- 1. First alphabetically by last_name
SELECT first_name, last_name, birth_date
FROM students
ORDER BY last_name ASC
LIMIT 4;

-- 2. Youngest student
SELECT first_name, last_name, birth_date
FROM students
ORDER BY birth_date DESC
LIMIT 1;

-- 3. Skip first 2, get next 3
SELECT first_name, last_name, birth_date
FROM students
ORDER BY id
OFFSET 2
LIMIT 3;


