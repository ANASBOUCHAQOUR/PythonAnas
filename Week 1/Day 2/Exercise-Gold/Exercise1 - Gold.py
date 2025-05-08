birthdays = {
   "John": "1990/01/15",
   "Alice": "1985/05/22",
   "Bob": "1995/10/10",
   "Emma": "1992/07/30",
   "Michael": "1988/12/25"
}
birthdays["John"] = "1990/01/15"
birthdays["Alice"] = "1985/05/22"
birthdays["Bob"] = "1995/10/10"
birthdays["Emma"] = "1992/07/30"
birthdays["Michael"] = "1988/12/25"

name = input("Enter a name: ")
birthday = input("Enter a birthday: ")
birthdays[name] = birthday
print(birthdays)
if name in birthdays:
    print(f"{name} is in the dictionary.")
else:
    print(f"{name} is not in the dictionary.")


