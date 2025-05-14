import asyncio
from googletrans import Translator

french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
translated = dict()

async def translate():
    async with Translator() as translator:
        for word in french_words:
            result = await translator.translate(word)
            translated_word = result.text
            translated[word] = translated_word

        print(translated)

asyncio.run(translate())