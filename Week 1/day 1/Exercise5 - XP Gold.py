# Exercise 5: Greatest Number

# Ask the user for three numbers
num1 = 25
num2 = 78
num3 = 87

# Find the greatest number
if num1 >= num2 and num1 >= num3:
    greatest = num1
elif num2 >= num1 and num2 >= num3:
    greatest = num2
else:
    greatest = num3

#result
print("The greatest number is:", greatest)
