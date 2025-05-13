SELECT COUNT(*) FROM actors;
INSERT INTO actors (first_name, last_name)
VALUES ('', '');
-- ❗ This insert will NOT work if the table columns have the "NOT NULL" constraint