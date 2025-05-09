import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * self.radius ** 2

    def definition(self):
        print("A circle is a shape with all points the same distance from its center.")

# Test the Circle class
c1 = Circle()          # Default radius = 1.0
c2 = Circle(3.5)       # Custom radius

print("Circle 1:")
print("Perimeter:", c1.perimeter())
print("Area:", c1.area())
c1.definition()

print("\nCircle 2:")
print("Perimeter:", c2.perimeter())
print("Area:", c2.area())
c2.definition()
