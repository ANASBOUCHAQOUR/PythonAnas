def make_shirt(size='L', message='I love Python'):
    print(f"The size of the shirt is {size} and the text is '{message}'")

# Large shirt
make_shirt()

# Medium shirt 
make_shirt('M')

# size and message
make_shirt('S', 'Keep calm and code on!')

#keyword arguments
make_shirt(size='XL', message='Debugging is fun!')
make_shirt(message='Stay curious!', size='XS')
