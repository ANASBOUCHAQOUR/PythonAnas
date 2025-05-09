# define the Pets manager class
class Pets:
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


# define the base Cat class
class Cat:
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f"{self.name} is just walking around"


# define cat breeds inheriting from Cat
class Bengal(Cat):
    def sing(self, sound):
        return f"{self.name} says: {sound}"


class Chartreux(Cat):
    def sing(self, sound):
        return f"{self.name} says: {sound}"


# step 1: define the Siamese class (new breed)
class Siamese(Cat):
    def __init__(self, name, age, eye_color):
        super().__init__(name, age)
        self.eye_color = eye_color  # New attribute for Siamese cats

    def sing(self, sound):
        return f"{self.name} with {self.eye_color} eyes says: {sound}"


# step 2: create a list of cat instances
cat1 = Bengal("Simba", 3)
cat2 = Chartreux("Luna", 4)
cat3 = Siamese("Coco", 2, "blue")

all_cats = [cat1, cat2, cat3]

# step 3: create an instance of Pets
sara_pets = Pets(all_cats)

# step 4: take all cats for a walk
sara_pets.walk()