brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2

print("Zara's clients are:", ", ".join(brand["type_of_clothes"]))

brand["country_creation"] = "Spain"

if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

del brand["creation_date"]

print("Last international competitor:", brand["international_competitors"][-1])

print("Major clothes colors in the US:", brand["major_color"]["US"])

print("Number of key-value pairs in 'brand':", len(brand))

print("Keys in the 'brand' dictionary:", list(brand.keys()))

more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

brand.update(more_on_zara)

print("Updated number of stores:", brand["number_stores"])