import random

# Exercise 6: Random Number Game with Loop and Score Tracking

# Initialize win/loss counters
wins = 0
losses = 0

print("Welcome to the Number Guessing Game!")
print("Guess a number between 1 and 9.")

while True:
    # Get user input
    guess = input("Enter your guess (1-9) or 'q' to quit: ")

    if guess.lower() == 'q':
        break  # Exit the loop

    # Validate input
    if not guess.isdigit() or not (1 <= int(guess) <= 9):
        print("Invalid input. Please enter a number between 1 and 9.")
        continue

    user_guess = int(guess)
    random_number = random.randint(1, 9)

    # Compare and give result
    if user_guess == random_number:
        print("Winner 🎉")
        wins += 1
    else:
        print(f"Better luck next time! The correct number was {random_number}.")
        losses += 1

# Summary
print("\nGame Over!")
print(f"Total Wins: {wins}")
print(f"Total Losses: {losses}")
