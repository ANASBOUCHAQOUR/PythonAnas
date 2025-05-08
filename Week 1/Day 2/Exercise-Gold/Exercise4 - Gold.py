import random

def throw_dice():
    return random.randint(1, 4)

def throw_until_doubles():
    count = 0
    while True:
        die1 = throw_dice()  
        die2 = throw_dice()  
        count += 1  
        if die1 == die2:  
            break
    return count

def main():
    throws_list = []  # List to store the number of rolls for each simulation
    
    # simulation 100 times
    for _ in range(100):
        throws_needed = throw_until_doubles()  
        throws_list.append(throws_needed)  

    # Calculate total number of throws
    total_throws = sum(throws_list)
    
    average_throws = round(total_throws / len(throws_list), 2)

    # total and average results
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")

if __name__ == "__main__":
    main()
