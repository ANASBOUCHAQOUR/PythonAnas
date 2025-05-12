import math
import turtle

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self._radius = radius
        elif diameter is not None:
            self._radius = diameter / 2
        else:
            raise ValueError("You must provide either a radius or a diameter.")

    @property
    def radius(self):
        return self._radius

    @property
    def diameter(self):
        return self._radius * 2

    @property
    def area(self):
        return math.pi * self._radius ** 2

    def __str__(self):
        return f"Circle → Radius: {round(self.radius, 2)}, Diameter: {round(self.diameter, 2)}, Area: {round(self.area, 2)}"

    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)

    def __eq__(self, other):
        return isinstance(other, Circle) and self.radius == other.radius

    def __gt__(self, other):
        return self.radius > other.radius

    def __ge__(self, other):
        return self.radius >= other.radius


# Create and sort circles
circle1 = Circle(radius=50)
circle2 = Circle(diameter=160)
circle3 = circle1 + circle2

circles = [circle1, circle2, circle3]
circles.sort()

# Print circle info
for c in circles:
    print(c)

# Draw circles using turtle
screen = turtle.Screen()
screen.bgcolor("white")
t = turtle.Turtle()
t.speed("fastest")
t.pensize(2)
colors = ["red", "green", "blue"]

# Start position
t.penup()
t.goto(-200, 0)
t.pendown()

# Draw sorted circles without overlap
for i, circle in enumerate(circles):
    t.color(colors[i % len(colors)])
    t.penup()
    t.forward(circle.radius * 2 + 20)  # move forward before drawing
    t.pendown()
    t.circle(circle.radius)

t.hideturtle()
turtle.done()
