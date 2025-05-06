basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print("Initial basket:", basket)

# Remove Banana
basket.remove("Banana")
print("After removing Banana:", basket)

# Remove Blueberries
basket.remove("Blueberries")
print("After removing Blueberries:", basket)

# Add Kiwi to the end
basket.append("Kiwi")
print("After adding Kiwi to the end:", basket)

# Add Apples to the beginning
basket.insert(0, "Apples")
print("After adding Apples to the beginning:", basket)

# Count apples
apple_count = basket.count("Apples")
print(f"Number of apples in the basket: {apple_count}")

# Empty the basket
basket.clear()
print("After emptying the basket:", basket)