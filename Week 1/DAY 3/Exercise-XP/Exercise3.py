# step 1 create the song class
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# step 2 create a song object with new lyrics
imagine = Song([
    "Imagine there's no heaven",
    "It's easy if you try",
    "No hell below us",
    "Above us only sky",
    "Imagine all the people living for today"
])

# step 3 call the method to print the lyrics
imagine.sing_me_a_song()
