my_fav_numbers = {7, 13, 23, 42, 99}
print("My favorite numbers initially:", my_fav_numbers)

# Add two new numbers
my_fav_numbers.add(8)
my_fav_numbers.add(16)
print("After adding two numbers:", my_fav_numbers)

# Remove the last number - sets are unordered, so we'll convert to list first
fav_list = list(my_fav_numbers)
fav_list.pop()  # Remove the last element from the list
my_fav_numbers = set(fav_list)  # Convert back to set
print("After removing the last number:", my_fav_numbers)

# Create friend's favorites set
friend_fav_numbers = {3, 8, 24, 35, 101}
print("Friend's favorite numbers:", friend_fav_numbers)

# Concatenate the two sets
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print("Our combined favorite numbers:", our_fav_numbers)