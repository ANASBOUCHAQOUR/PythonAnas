# Morse code dictionary
MORSE_CODE_DICT = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',

    '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', 
    '9': '----.', '0': '-----',

    ',': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.', 
    '-': '-....-', '(': '-.--.', ')': '-.--.-'
}

# R Morse code dictionary
MORSE_TO_ENG = {value: key for key, value in MORSE_CODE_DICT.items()}

# F English to Morse
def english_to_morse(text):
    text = text.upper()
    morse_list = []
    for word in text.split():
        morse_word = ' '.join(MORSE_CODE_DICT.get(char, '') for char in word)
        morse_list.append(morse_word)
    return ' / '.join(morse_list)

# F Morse to English
def morse_to_english(code):
    words = code.split(' / ')
    decoded_words = []
    for word in words:
        letters = word.split()
        decoded_word = ''.join(MORSE_TO_ENG.get(char, '') for char in letters)
        decoded_words.append(decoded_word)
    return ' '.join(decoded_words)

# Test
text = "Hello World"
morse = english_to_morse(text)
print("Morse code:", morse)

back_to_english = morse_to_english(morse)
print("Back to English:", back_to_english)
