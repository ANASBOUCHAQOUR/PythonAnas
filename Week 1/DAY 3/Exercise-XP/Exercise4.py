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
