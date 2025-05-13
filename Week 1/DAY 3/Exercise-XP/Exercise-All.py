# exercise 1
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


# exercise 2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!")

# step 2 objects
davids_dog = Dog("Rex", 60)
sarahs_dog = Dog("Bella", 45)

# step 3 print dog details and call methods
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

# step 4 compare dog sizes
if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same height.")

    

# exercise 3
# step 1 create the song class
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# step 2 create a song object with new lyrics
imagine = Song([
    "Imagine there's no heaven",
    "It's easy if you try",
    "No hell below us",
    "Above us only sky",
    "Imagine all the people living for today"
])

# step 3 call the method to print the lyrics
imagine.sing_me_a_song()


# exercise 4

# step 1 define the zoo class
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("Animals in the zoo:", self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        self.grouped_animals = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.grouped_animals:
                self.grouped_animals[first_letter] = [animal]
            else:
                self.grouped_animals[first_letter].append(animal)

    def get_groups(self):
        for group, animals in self.grouped_animals.items():
            print(f"{group}: {animals}")

# step 2 create a zoo instance
ramat_gan_safari = Zoo("Ramat Gan Safari")

# step 3 use the zoo methods
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.add_animal("Tiger")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Giraffe")

# show all animals
ramat_gan_safari.get_animals()

# sell an animal
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()

# sort and group animals
ramat_gan_safari.sort_animals()

# display grouped animals
ramat_gan_safari.get_groups()

