# Challenge 2: Remove Consecutive Duplicate Letters

# Ask the user for a string
user_input = input("Enter a word with consecutive duplicate letters: ")

# Remove consecutive duplicates
result = ""
previous_char = ""

for char in user_input:
    if char != previous_char:
        result += char
    previous_char = char

print("Cleaned word:", result)
