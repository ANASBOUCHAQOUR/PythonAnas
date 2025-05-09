class Person:
    def __init__(self, first_name, age, last_name=""):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_member = Person(first_name, age, self.last_name)
        self.members.append(new_member)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print(f"{member.first_name} is over 18, their family allows them to go out.")
                else:
                    print(f"Sorry {member.first_name}, you're not allowed to go out yet.")
                return
        print(f"No family member found with the name {first_name}")

    def family_presentation(self):
        print(f"Welcome to the {self.last_name} family!")
        for member in self.members:
            print(f"{member.first_name} - {member.age} years old")


# test the classes

family = Family("Smith")

family.born("Alice", 25)
family.born("Eve", 17)
family.born("Charlie", 22)

family.check_majority("Alice")
family.check_majority("Eve")

family.family_presentation()