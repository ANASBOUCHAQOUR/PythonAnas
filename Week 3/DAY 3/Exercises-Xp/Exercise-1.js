document.addEventListener('DOMContentLoaded', () => {
    // 1. Retrieve h1 and console.log it
    const h1 = document.querySelector('h1');
    console.log(h1);

    // 2. Remove the last paragraph in the article
    const article = document.querySelector('article');
    const paragraphs = article.getElementsByTagName('p');
    article.removeChild(paragraphs[paragraphs.length - 1]);

    // 3. Add event listener to change h2 background to red when clicked
    const h2 = document.querySelector('h2');
    h2.addEventListener('click', () => {
        h2.style.backgroundColor = 'red';
    });

    // 4. Add event listener to hide h3 when clicked
    const h3 = document.querySelector('h3');
    h3.addEventListener('click', () => {
        h3.style.display = 'none';
    });

    // 5. Add button to make all paragraphs bold
    const button = document.createElement('button');
    button.textContent = 'Make Text Bold';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        const paragraphs = document.getElementsByTagName('p');
        for (const p of paragraphs) {
            p.style.fontWeight = 'bold';
        }
    });

    // BONUS 1: Random font size on h1 hover
    h1.addEventListener('mouseover', () => {
        const randomSize = Math.floor(Math.random() * 101); // Random number between 0 and 100
        h1.style.fontSize = `${randomSize}px`;
    });

    // BONUS 2: Fade out effect on second paragraph hover
    const secondParagraph = paragraphs[1];
    secondParagraph.style.transition = 'opacity 0.5s ease-in-out';

    secondParagraph.addEventListener('mouseover', () => {
        secondParagraph.style.opacity = '0';
    });

    secondParagraph.addEventListener('mouseout', () => {
        secondParagraph.style.opacity = '1';
    });
});
