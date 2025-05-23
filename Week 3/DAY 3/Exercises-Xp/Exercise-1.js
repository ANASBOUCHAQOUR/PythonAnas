document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        h1: document.querySelector('h1'),
        h2: document.querySelector('h2'),
        h3: document.querySelector('h3'),
        article: document.querySelector('article'),
        paragraphs: document.querySelectorAll('p')
    };

    console.log('H1 Element:', elements.h1);

    const lastParagraph = elements.paragraphs[elements.paragraphs.length - 1];
    lastParagraph.remove();

    elements.h2.addEventListener('click', function() {
        this.style.backgroundColor = '#ff0000'; 
    });

    elements.h3.addEventListener('click', function() {
        this.style.visibility = 'hidden'; 
    });

    const boldButton = document.createElement('button');
    boldButton.textContent = 'Make Text Bold';
    boldButton.style.padding = '10px 20px';
    boldButton.style.margin = '10px';
    document.body.appendChild(boldButton);

    boldButton.addEventListener('click', () => {
        for (const paragraph of elements.paragraphs) {
            paragraph.style.fontWeight = 'bold';
        }
    });

    elements.h1.addEventListener('mouseover', () => {
        const minSize = 20;
        const maxSize = 100;
        const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
        elements.h1.style.fontSize = `${randomSize}px`;
    });

    const secondParagraph = elements.paragraphs[1];
    secondParagraph.style.transition = 'all 0.5s ease';

    secondParagraph.addEventListener('mouseover', () => {
        secondParagraph.style.opacity = '0.3';
        secondParagraph.style.transform = 'scale(0.95)';
    });

    secondParagraph.addEventListener('mouseout', () => {
        secondParagraph.style.opacity = '1';
        secondParagraph.style.transform = 'scale(1)';
    });
});
