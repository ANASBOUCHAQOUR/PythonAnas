import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Game data
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🎮', name: 'Game Controller' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🎨', name: 'Artist Palette' },
    { emoji: '🎵', name: 'Musical Note' },
    { emoji: '🏆', name: 'Trophy' },
    { emoji: '🌟', name: 'Star' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🎭', name: 'Performing Arts' },
    { emoji: '🎪', name: 'Circus Tent' },
    { emoji: '🎯', name: 'Bullseye' },
    { emoji: '🎲', name: 'Die' }
];

// Game state
let currentEmoji = null;
let options = [];
let scores = [];

// Helper function to get random emoji
const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
};

// Helper function to get random options
const getRandomOptions = (correctName, count = 4) => {
    const allNames = emojis.map(e => e.name);
    const otherNames = allNames.filter(name => name !== correctName);
    const shuffled = otherNames.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count - 1);
    const options = [...selected, correctName];
    return options.sort(() => 0.5 - Math.random());
};

// Routes
// GET new game question
app.get('/api/game/question', (req, res) => {
    currentEmoji = getRandomEmoji();
    options = getRandomOptions(currentEmoji.name);
    
    res.json({
        emoji: currentEmoji.emoji,
        options: options
    });
});

// POST player's guess
app.post('/api/game/guess', (req, res) => {
    const { playerName, guess } = req.body;
    
    if (!currentEmoji || !guess) {
        return res.status(400).json({ 
            message: 'No active game or missing guess' 
        });
    }
    
    const isCorrect = guess === currentEmoji.name;
    
    // Update score
    const playerScore = scores.find(s => s.name === playerName) || { 
        name: playerName, 
        score: 0 
    };
    
    if (isCorrect) {
        playerScore.score += 1;
    }
    
    if (!scores.find(s => s.name === playerName)) {
        scores.push(playerScore);
    }
    
    // Get new question
    currentEmoji = getRandomEmoji();
    options = getRandomOptions(currentEmoji.name);
    
    res.json({
        correct: isCorrect,
        correctAnswer: currentEmoji.name,
        newQuestion: {
            emoji: currentEmoji.emoji,
            options: options
        },
        score: playerScore.score
    });
});

// GET leaderboard
app.get('/api/leaderboard', (req, res) => {
    const sortedScores = [...scores]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
    
    res.json(sortedScores);
});

// Start server
app.listen(PORT, () => {
    console.log(`🎮 Emoji Guessing Game server running on http://localhost:${PORT}`);
}); 