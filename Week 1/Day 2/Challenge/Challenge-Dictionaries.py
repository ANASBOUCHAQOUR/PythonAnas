def letter_index_map(word):
    letter_indexes = {}

    for index, letter in enumerate(word):
        if letter in letter_indexes:
            letter_indexes[letter].append(index)
        else:
            letter_indexes[letter] = [index]
    
    return letter_indexes

user_word = input("Enter a word: ").strip()
result = letter_index_map(user_word)

print(result)
