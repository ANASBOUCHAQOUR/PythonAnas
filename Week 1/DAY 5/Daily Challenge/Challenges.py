# Challenge 1

def sort(text):
    return ",".join(sorted(text.split(',')))

print(sort("without,hello,bag,world"))

# Challenge 2

def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)
    return longest

print(longest_word("Margaret's toy is a pretty doll."))