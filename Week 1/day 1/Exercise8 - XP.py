sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", 
                  "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", 
                  "Pastrami sandwich"]
print("Initial sandwich orders:", sandwich_orders)

# Remove all pastrami sandwiches
while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")
print("Orders after removing pastrami:", sandwich_orders)

# Process the orders
finished_sandwiches = []

while sandwich_orders:
    current_sandwich = sandwich_orders.pop(0)
    print(f"Making {current_sandwich}...")
    finished_sandwiches.append(current_sandwich)

# Print the finished sandwiches
print("\nAll sandwiches have been made:")
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")