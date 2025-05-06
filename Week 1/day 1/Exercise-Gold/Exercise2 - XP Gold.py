# Exercise 2: For Loop

print("All numbers from 1 to 20:")
for i in range(1, 21):
    print(i)

print("\nNumbers with even index (starting index at 0):")
numbers = list(range(1, 21))
for index in range(0, len(numbers), 2):  # even indexes only
    print(numbers[index])
