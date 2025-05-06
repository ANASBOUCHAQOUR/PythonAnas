# Exercise: While Loop - Ask for Name

my_name = "AnasBOUCHAQOUR" 

while True:
    name = input("What is your name? ")
    if name == my_name:
        print("That's correct! Welcome,", my_name)
        break
    else:
        print("That's not my name. Try again.")
