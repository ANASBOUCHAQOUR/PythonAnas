birthdays = {
   "John": "1990/01/15",
   "Alice": "1985/05/22",
   "Bob": "1995/10/10",
   "Emma": "1992/07/30",
   "Michael": "1988/12/25"
}
user_input = input("\nEnter a name to look up their birthday: ")

if user_input in birthdays:
    print(f"{user_input}'s birthday is on {birthdays[user_input]}.")
else:
    print(f"Sorry, {user_input} is not in the dictionary.")

