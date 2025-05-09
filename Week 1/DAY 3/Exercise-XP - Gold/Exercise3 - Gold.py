class MenuManager:
    def __init__(self):
        #  menu with current dishes
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]
    
    def add_item(self, name, price, spice, gluten):
        # add a new dish to the menu
        new_dish = {"name": name, "price": price, "spice": spice, "gluten": gluten}
        self.menu.append(new_dish)
        print(f"{name} added to the menu.")
    
    def update_item(self, name, price, spice, gluten):
        # check if the dish is in the menu and update it
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                dish["price"] = price
                dish["spice"] = spice
                dish["gluten"] = gluten
                print(f"{name} updated successfully.")
                return
        print(f"{name} not found in the menu.")
    
    def remove_item(self, name):
        # remove a dish from the menu
        for dish in self.menu:
            if dish["name"].lower() == name.lower():
                self.menu.remove(dish)
                print(f"{name} has been removed from the menu.")
                print(f"Updated Menu: {self.menu}")
                return
        print(f"{name} not found in the menu.")

menu = MenuManager()

# add a new item
menu.add_item("Pizza", 12, "A", True)
menu.update_item("Pizza", 15, "A", True)
menu.remove_item("Pizza")
