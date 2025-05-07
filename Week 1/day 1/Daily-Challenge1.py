# Challenge 1: Multiples List Generator

# Ask the user for a number and the desired length
number = int(input("Enter a number: "))
length = int(input("Enter the desired length: "))

# Generate the list of multiples
multiples = []
for i in range(1, length + 1):
    multiples.append(number * i)

print("Multiples list:", multiples)
