import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

    def generate_random_list(self):
        return [random.randint(1, 100) for _ in range(len(self.letters))]

mylist = MyList(['a', 'b', 'c', 'd'])

print("Original list:", mylist.letters)
print("Reversed list:", mylist.get_reversed())
print("Sorted list:", mylist.get_sorted())
print("Random number list:", mylist.generate_random_list())
