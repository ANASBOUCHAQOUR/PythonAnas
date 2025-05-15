-- Part I: Customer and Profile Management
-- Create two related tables: Customer (main table) and Customer Profile (profile information)
create table customer (
    id serial primary key,
    first_name varchar(50),
    last_name varchar(50) not null
);

-- Customer Profile table with login status and foreign key to Customer
create table customer_profile (
    id serial primary key,
    isLoggedIn boolean default false,
    customer_id int unique references customer(id) on delete cascade
);

-- Insert initial customer data
insert into customer (first_name, last_name)
values 
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- Insert customer profiles using subqueries to link with customer table
insert into customer_profile (isLoggedIn, customer_id)
values (
    true,
    (select id from customer where first_name = 'John' and last_name = 'Doe')
);

insert into customer_profile (isLoggedIn, customer_id)
values (
    false,
    (select id from customer where first_name = 'Jerome' and last_name = 'Lalu')
);

-- Query 1: Get first names of all logged-in customers
select c.first_name
from customer c
join customer_profile cp on c.id = cp.customer_id
where cp.isLoggedIn = true;

-- Query 2: Get all customers' first names and login status, including those without profiles
select c.first_name, cp.isLoggedIn
from customer c
left join customer_profile cp on c.id = cp.customer_id;

-- Query 3: Count customers who are not logged in
select count(*) as not_logged_in_count
from customer c
left join customer_profile cp on c.id = cp.customer_id
where cp.isLoggedIn = false;

-- Part II: Library Management System
-- Create Book table to store book information
create table book (
    book_id serial primary key,
    title varchar(100) not null,
    author varchar(100) not null
);

-- Insert sample books
insert into book (title, author) values
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

-- Create Student table with age constraint (must be 15 or younger)
create table student (
    student_id serial primary key,
    name varchar(50) not null unique,
    age int check (age <= 15)
);

-- Insert sample students
insert into student (name, age) values
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- Create Library junction table to track book borrowing
-- Uses composite primary key and cascade rules for referential integrity
create table library (
    book_fk_id int references book(book_id) on delete cascade on update cascade,
    student_fk_id int references student(student_id) on delete cascade on update cascade,
    borrowed_date date,
    primary key (book_fk_id, student_fk_id)
);

-- Insert borrowing records using subqueries to link books and students
-- John borrowed Alice In Wonderland
insert into library (book_fk_id, student_fk_id, borrowed_date) values (
    (select book_id from book where title = 'Alice In Wonderland'),
    (select student_id from student where name = 'John'),
    '15/02/2022'
);

-- Bob borrowed To kill a mockingbird
insert into library (book_fk_id, student_fk_id, borrowed_date) values (
    (select book_id from book where title = 'To kill a mockingbird'),
    (select student_id from student where name = 'Bob'),
    '03/03/2021'
);

-- Lera borrowed Alice In Wonderland
insert into library (book_fk_id, student_fk_id, borrowed_date) values (
    (select book_id from book where title = 'Alice In Wonderland'),
    (select student_id from student where name = 'Lera'),
    '23/05/2021'
);

-- Bob borrowed Harry Potter
insert into library (book_fk_id, student_fk_id, borrowed_date) values (
    (select book_id from book where title = 'Harry Potter'),
    (select student_id from student where name = 'Bob'),
    '12/08/2021'
);

-- Display all borrowing records
select * from library;

-- Show student names and their borrowed books
select s.name, b.title
from library l
join student s on l.student_fk_id = s.student_id
join book b on l.book_fk_id = b.book_id;

-- Calculate average age of students who borrowed Alice in Wonderland
select avg(s.age) as avg_age
from library l
join student s on l.student_fk_id = s.student_id
join book b on l.book_fk_id = b.book_id
where b.title = 'Alice In Wonderland';

-- Demonstrate cascade delete
-- When a student is deleted, their borrowing records are automatically removed
delete from student where name = 'John';
-- The records for John are automatically deleted from the library table because of ON DELETE CASCADE.