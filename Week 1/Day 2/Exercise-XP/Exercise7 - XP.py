import random

def get_random_temp(season):
    if season == "winter":
        return round(random.uniform(-10, 16), 1)
    elif season == "spring":
        return round(random.uniform(10, 24), 1)
    elif season == "summer":
        return round(random.uniform(24, 40), 1)
    elif season == "autumn" or season == "fall":
        return round(random.uniform(5, 23), 1)
    else:
        return round(random.uniform(-10, 40), 1)  # fallback

def get_season_from_month(month):
    if month in [12, 1, 2]:
        return "winter"
    elif month in [3, 4, 5]:
        return "spring"
    elif month in [6, 7, 8]:
        return "summer"
    elif month in [9, 10, 11]:
        return "autumn"
    else:
        return None

def main():
    try:
        month = int(input("Enter the number of the month (1-12): "))
        season = get_season_from_month(month)
        if not season:
            print("Invalid month. Please enter a number from 1 to 12.")
            return
        
        temp = get_random_temp(season)
        print(f"The temperature right now is {temp}°C.")
        
        # Advice based on temperature
        if temp < 0:
            print("Brrr, that’s freezing! Wear some extra layers today.")
        elif 0 <= temp <= 16:
            print("Quite chilly! Don’t forget your coat.")
        elif 17 <= temp <= 23:
            print("Nice weather. A light jacket should do.")
        elif 24 <= temp <= 32:
            print("Warm and pleasant! Enjoy the sun.")
        elif temp > 32:
            print("It's very hot! Stay hydrated and avoid the sun.")
    except ValueError:
        print("Please enter a valid number for the month.")

# Run the program
main()