cars_str = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

cars_list = cars_str.split(", ")
print(f"There are {len(cars_list)} cars in the list")

cars_desc = sorted(cars_list, reverse=True)
print(f"The list of cars in descending order: {cars_desc}")

count_with_o = sum(1 for car in cars_list if 'o' in car.lower())
print(f"Manufacturers with the letter 'o': {count_with_o}")

count_without_i = sum(1 for car in cars_list if 'i' not in car.lower())
print(f"Manufacturers without the letter 'i': {count_without_i}")

duplicate_list = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
unique_cars = list(set(duplicate_list))

comma_separated = ", ".join(unique_cars)
print(f"Unique manufacturers: {comma_separated}")
print(f"Total unique manufacturers: {len(unique_cars)}")

reversed_names = [car[::-1] for car in sorted(unique_cars)]
print("Reversed names in A-Z order:")
print(reversed_names)

