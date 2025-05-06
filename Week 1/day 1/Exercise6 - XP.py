integers_tuple = (1, 2, 3, 4)
print("Original tuple:", integers_tuple)

print("Is it possible to add more integers to the tuple?")
print("No, tuples are immutable. We would need to create a new tuple.")
new_tuple = integers_tuple + (5, 6)
print("New tuple created by concatenation:", new_tuple