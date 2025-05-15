-- Create tables for a product ordering system
-- Users table stores customer information
create table users (
    user_id serial primary key,
    username varchar(50) not null unique,  -- Added unique constraint
    password varchar(50) not null,
    created_at timestamp default current_timestamp  -- Added timestamp
);

-- Product orders table stores order headers
create table product_orders (
    order_id serial primary key,
    user_id int references users (user_id) on delete cascade,
    order_date timestamp default current_timestamp,
    status varchar(20) default 'pending'  -- Added order status
);

-- Items table stores individual items in each order
create table items (
    item_id serial primary key,
    order_id int references product_orders (order_id) on delete cascade,
    product_name varchar(100) not null,
    price numeric(10, 2) not null check (price >= 0),  -- Added price validation
    quantity int default 1 check (quantity > 0)  -- Added quantity field
);

-- Function to calculate total price for a given order
-- Parameters:
--   given_order_id: The ID of the order to calculate total for
-- Returns:
--   The total price of all items in the order
--   Returns NULL if order doesn't exist or has no items
create or replace function total_price_per_order(given_order_id int)
returns numeric(10, 2) as $$
declare 
    total numeric;
    order_exists boolean;
begin
    -- Check if order exists
    select exists(
        select 1 from product_orders where order_id = given_order_id
    ) into order_exists;
    
    if not order_exists then
        raise exception 'Order ID % does not exist', given_order_id;
    end if;

    -- Calculate total price
    select sum(items.price * items.quantity) into total
    from product_orders 
    join items on items.order_id = product_orders.order_id
    where product_orders.order_id = given_order_id;
    
    -- Return 0 instead of NULL for empty orders
    return coalesce(total, 0);
end;
$$ language plpgsql;

-- Test data
insert into users (username, password)
values ('user1', 'password1'),
       ('user2', 'password2');

insert into product_orders (user_id, status)
values (1, 'completed'),
       (1, 'pending'),
       (2, 'completed');

insert into items (order_id, product_name, price, quantity)
values (1, 'item1', 10.00, 2),  -- Added quantity
       (1, 'item2', 20.00, 1),
       (2, 'item3', 30.00, 3),
       (3, 'item4', 40.00, 1);

-- Test the function with various scenarios
select total_price_per_order(1) as total_price;  -- Should return 40.00 (10*2 + 20*1)
-- select total_price_per_order(999);  -- Should raise exception
-- select total_price_per_order(null);  -- Should raise exception