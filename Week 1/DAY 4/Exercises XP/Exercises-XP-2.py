# define the Dog class
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} won the fight against {other_dog.name}"
        elif self_power < other_power:
            return f"{other_dog.name} won the fight against {self.name}"
        else:
            return f"The fight between {self.name} and {other_dog.name} is a draw!"


# create dog instances
dog1 = Dog("Max", 3, 10)
dog2 = Dog("Bella", 2, 15)
dog3 = Dog("Rocky", 4, 20)

#test dog methods
print(dog1.bark())
print(f"{dog2.name}'s run speed is: {dog2.run_speed():.2f}")
print(dog1.fight(dog2))
print(dog3.fight(dog1))
print(dog2.fight(dog3))
