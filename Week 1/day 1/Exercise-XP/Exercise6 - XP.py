integers_tuple = (1, 2, 3, 4)
print("Original tuple:", integers_tuple)

# Attempting to add elements to the tuple
print("Is it possible to add more integers to the tuple?")
print("No, tuples are immutable. We would need to create a new tuple.")
# Example of how to create a new tuple with additional values:
new_tuple = integers_tuple + (5, 6,7,8,9,10)
print("New tuple created by concatenation:", new_tuple)