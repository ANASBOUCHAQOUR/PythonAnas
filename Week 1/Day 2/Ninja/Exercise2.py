def get_full_name(first_name, last_name, middle_name=""):
    first = first_name.capitalize()
    middle = middle_name.capitalize()
    last = last_name.capitalize()
    if middle:
        return f"{first} {middle} {last}"
    else:
        return f"{first} {last}"

first = input("Enter your first name: ")
last = input("Enter your last name: ")
add_middle = input("Do you want to enter a middle name? (yes/no): ").strip().lower()

if add_middle == "yes":
    middle = input("Enter your middle name: ")
    full_name = get_full_name(first_name=first, middle_name=middle, last_name=last)
else:
    full_name = get_full_name(first_name=first, last_name=last)

print("Your full name is:", full_name)
