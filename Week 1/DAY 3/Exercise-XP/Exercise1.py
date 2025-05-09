class cats:
    def __init__(self, name, age):
        self.name = name
        self.age = age

first_cat = cats("Whiskers", 3)
second_cat = cats("Mittens", 2)
third_cat = cats("Fluffy", 4)

print(f"{first_cat.name} is {first_cat.age} years old")
print(f"{second_cat.name} is {second_cat.age} years old")
print(f"{third_cat.name} is {third_cat.age} years old")

def oldest_cat(cat1, cat2, cat3):
    if cat1.age > cat2.age and cat1.age > cat3.age:
        return cat1
    elif cat2.age > cat1.age and cat2.age > cat3.age:
        return cat2
    else:
        return cat3
print(f"The oldest cat is {oldest_cat(first_cat, second_cat, third_cat).name}, and is {oldest_cat(first_cat, second_cat, third_cat).age} years old")
