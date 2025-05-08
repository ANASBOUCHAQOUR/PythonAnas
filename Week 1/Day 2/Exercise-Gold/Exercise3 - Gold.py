def calculate_pattern_sum(X):
    # Convert X to a string to build repeated patterns
    str_X = str(X)
    result = int(str_X) + int(str_X * 2) + int(str_X * 3) + int(str_X * 4)
    return result

# Example usage
X = int(input("Enter an integer: "))
print("The result is:", calculate_pattern_sum(X))
