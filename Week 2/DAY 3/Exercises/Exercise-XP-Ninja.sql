-- Retrieve all films with a rating of G or PG, which are are not currently rented
select film.title from film
join film_category on film_category.film_id = film.film_id
join category on category.category_id = film_category.category_id
where rating in ('G', 'PG')
and film.film_id in (
    select inventory.film_id from rental
    join inventory on inventory.inventory_id = rental.inventory_id
    where rental_date is NULL
       or return_date is NULL 
);

-- Create a new table which will represent a waiting list for children’s movies.
create table childrens_movie_waitlist (
    waitlist_id serial primary key,
    film_id int references film (film_id) on delete cascade,
    child_name varchar(100) not null,
    request_date timestamp default current_timestamp
);

-- References included: film_id (references film table).

-- Retrieve the number of people waiting for each children’s DVD. Test this by adding rows to the table that you created in question 2 above.

insert into childrens_movie_waitlist (film_id, child_name)
values (1, 'John Doe'),
       (1, 'Jane Smith'),
       (2, 'Alice Johnson'),
       (3, 'Bob Brown'),
       (3, 'Charlie Davis');

select film.film_id, film.title, count(*) from childrens_movie_waitlist as cmw
join film on film.film_id = cmw.film_id
group by film.film_id, film.title