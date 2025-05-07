names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")

if user_name in names:
    index = names.index(user_name)  # Get the first occurrence
    print(f"{user_name} is found at index {index}.")
else:
    print(f"{user_name} is not in the list.")
