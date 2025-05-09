family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

ticket_prices = {}

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:  # age > 12
        price = 15
    
    ticket_prices[name] = price
    print(f"{name} has to pay ${price}")

print(ticket_prices)    

total_cost = sum(ticket_prices.values())
print(f"The family's total cost for the movies is ${total_cost}")