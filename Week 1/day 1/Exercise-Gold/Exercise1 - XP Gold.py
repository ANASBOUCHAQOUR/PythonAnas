# Exercise 1: What is the Season?

month = int(input("Enter the month number (1-12): "))

if month in [3, 4, 5]:
    print("The season is Spring.")
elif month in [6, 7, 8]:
    print("The season is Summer.")
elif month in [9, 10, 11]:
    print("The season is Autumn.")
elif month in [12, 1, 2]:
    print("The season is Winter.")
else:
    print("Invalid month. Please enter a number between 1 and 12.")
