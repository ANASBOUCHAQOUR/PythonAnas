# menu_item.py

class MenuItem:
    def __init__(self, name, price=0):
        if not name:
            raise ValueError("Item name cannot be empty.")
        if price < 0:
            raise ValueError("Item price cannot be negative.")
        self.name = name
        self.price = price

    def __repr__(self):
        return f"<MenuItem name={self.name}, price={self.price}>"

    def save(self, connection):
        with connection.cursor() as cursor:
            cursor.execute(
                "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)",
                (self.name, self.price),
            )
        connection.commit()

    def delete(self, connection):
        with connection.cursor() as cursor:
            cursor.execute(
                "DELETE FROM menu_items WHERE item_name = %s",
                (self.name,)
            )
        connection.commit()

    def update(self, connection, new_name=None, new_price=None):
        if new_name is None and new_price is None:
            raise ValueError("You must provide a new name or new price to update.")

        with connection.cursor() as cursor:
            if new_name and new_price is not None:
                cursor.execute(
                    "UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_name = %s",
                    (new_name, new_price, self.name),
                )
                self.name = new_name
                self.price = new_price
            elif new_name:
                cursor.execute(
                    "UPDATE menu_items SET item_name = %s WHERE item_name = %s",
                    (new_name, self.name),
                )
                self.name = new_name
            elif new_price is not None:
                cursor.execute(
                    "UPDATE menu_items SET item_price = %s WHERE item_name = %s",
                    (new_price, self.name),
                )
                self.price = new_price
        connection.commit()

# menu_manager.py

from menu_item import MenuItem

class MenuManager:

    @classmethod
    def get_by_name(cls, connection, name):
        with connection.cursor() as cursor:
            cursor.execute(
                "SELECT item_name, item_price FROM menu_items WHERE item_name = %s", (name,)
            )
            result = cursor.fetchone()
        if result:
            return MenuItem(name=result[0], price=result[1])
        return None

    @classmethod
    def all_items(cls, connection):
        with connection.cursor() as cursor:
            cursor.execute("SELECT item_name, item_price FROM menu_items")
            results = cursor.fetchall()
        return [MenuItem(name=row[0], price=row[1]) for row in results]

# menu_editor.py

import psycopg2
from menu_item import MenuItem
from menu_manager import MenuManager

HOSTNAME = "localhost"
USERNAME = "postgres"
PASSWORD = "password"
DATABASE = "restaurant"

try:
    connection = psycopg2.connect(
        host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE
    )
except Exception as e:
    print(f"❌ Could not connect to database: {e}")
    exit()

def show_user_menu():
    while True:
        print("""
📋 Please choose an option:
[A] Add an Item
[D] Delete an Item
[U] Update an Item
[S] Show the Menu
[E] Exit
        """)
        choice = input("Your choice: ").strip().lower()
        match choice:
            case "a":
                add_item_to_menu()
            case "d":
                remove_item_from_menu()
            case "u":
                update_item_from_menu()
            case "s":
                show_restaurant_menu()
            case "e":
                print("\n👋 Exiting the program. Final Menu:")
                show_restaurant_menu()
                break
            case _:
                print("❗ Invalid option. Please choose again.")

def add_item_to_menu():
    try:
        name = input("Enter item name: ").strip()
        price = float(input("Enter item price: "))
        item = MenuItem(name, price)
        item.save(connection)
        print("✅ Item added successfully.")
    except ValueError:
        print("❌ Invalid input. Price must be a number.")
    except Exception as e:
        print(f"❌ Error adding item: {e}")

def remove_item_from_menu():
    try:
        name = input("Enter item name to delete: ").strip()
        item = MenuItem(name)
        item.delete(connection)
        print("✅ Item deleted successfully.")
    except Exception as e:
        print(f"❌ Error deleting item: {e}")

def update_item_from_menu():
    try:
        old_name = input("Enter current item name: ").strip()
        old_price = float(input("Enter current item price: "))
        new_name = input("Enter new item name: ").strip()
        new_price = float(input("Enter new item price: "))
        item = MenuItem(old_name, old_price)
        item.update(connection, new_name=new_name, new_price=new_price)
        print("✅ Item updated successfully.")
    except ValueError:
        print("❌ Invalid input. Prices must be numeric.")
    except Exception as e:
        print(f"❌ Error updating item: {e}")

def show_restaurant_menu():
    try:
        items = MenuManager.all_items(connection)
        print("\n📃 Current Menu:")
        if not items:
            print("⚠️ The menu is currently empty.")
        for item in items:
            print(f"🍽 Name: {item.name}, 💰 Price: {item.price}")
    except Exception as e:
        print(f"❌ Error showing menu: {e}")

if __name__ == "__main__":
    show_user_menu()
