import random

def number_game(user_number):

    # Validate that user_number is between 1 and 100
    if not (1 <= user_number <= 100):
        print("Error: Please enter a number between 1 and 100.")
        return
    
    # Generate random number between 1 and 100
    random_number = random.randint(1, 100)
    
    # Compare the two numbers
    if user_number == random_number:
        print(f"SUCCESS! Your number {user_number} matches the random number!")
    else:
        print(f"FAIL! Your number was {user_number}, but the random number was {random_number}.")

def play_game():
    try:
        user_input = int(input("Enter a number between 1 and 100: "))
        number_game(user_input)
    except ValueError:
        print("Error: Please enter a valid number.")

play_game()