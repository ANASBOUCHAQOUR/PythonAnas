// references to dom elements
const libForm = document.getElementById('libform');
const shuffleButton = document.getElementById('shuffle-button');
const storySpan = document.getElementById('story');

// story 
const storyTemplates = [
    (noun, adjective, person, verb, place) =>
        `The ${adjective} ${noun} was the last thing anyone expected to find at ${place}. 
        When ${person} decided to ${verb}, the ${noun} began to glow with an otherworldly light. 
        Scientists are still trying to explain what happened that day at ${place}!`,

    (noun, adjective, person, verb, place) =>
        `Deep in the heart of ${place}, a mysterious ${adjective} ${noun} appeared overnight. 
        ${person} was the first to discover it while trying to ${verb}. 
        The ${noun} seemed to respond to ${person}'s presence, creating patterns that no one could explain!`,

    (noun, adjective, person, verb, place) =>
        `The ancient ${place} held many secrets, but none as ${adjective} as the ${noun} that ${person} found. 
        Every time they tried to ${verb}, the ${noun} would change color and shape. 
        Local legends say the ${place} was built to protect this very ${noun}!`,

    (noun, adjective, person, verb, place) =>
        `In a hidden corner of ${place}, there was a ${adjective} ${noun} that only appeared at midnight. 
        ${person} discovered it while attempting to ${verb} under the full moon. 
        The ${noun} seemed to have a mind of its own, following ${person} wherever they went!`,

    (noun, adjective, person, verb, place) =>
        `The ${place} was famous for its ${adjective} ${noun}, but no one knew its true power until ${person} arrived. 
        When they started to ${verb}, the ${noun} began to float in the air, creating a spectacle that drew crowds from miles around!`
];

let currentStoryIndex = 0;
let userInputs = null;

// Generate  story from the current template and user inputs
const generateStory = (inputs) => {
    if (!inputs) return '';
    const { noun, adjective, person, verb, place } = inputs;
    return storyTemplates[currentStoryIndex](noun, adjective, person, verb, place);
};

// shuffle to a new story template and display it
const shuffleStory = () => {
    if (!userInputs) {
        alert('Please generate a story first!');
        return;
    }
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * storyTemplates.length);
    } while (newIndex === currentStoryIndex && storyTemplates.length > 1);

    currentStoryIndex = newIndex;
    storySpan.textContent = generateStory(userInputs);
};

shuffleButton.addEventListener('click', shuffleStory);
libForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    // validate inputs
    if (!noun || !adjective || !person || !verb || !place) {
        alert('Please fill in all fields!');
        return;
    }

    // inputs and show the first story
    userInputs = { noun, adjective, person, verb, place };
    currentStoryIndex = 0;
    storySpan.textContent = generateStory(userInputs);
});  